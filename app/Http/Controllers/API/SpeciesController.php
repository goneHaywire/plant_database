<?php

namespace App\Http\Controllers\API;

use App\Genera;
use App\Http\Controllers\Controller;
use App\Photo;
use App\Specie;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SpeciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Specie::with(['genera', 'genera.family'])->withCount(['favourites' => function ($query) {
            $query->where('user_id', Auth::user()->id);
        }])->paginate(20);
    }

    public function albanianIndex()
    {
        return Specie::with(['genera', 'genera.family'])->withCount(['favourites' => function ($query) {
            $query->where('user_id', Auth::user()->id);
        }])
            ->where('in_albania', 1)
            ->paginate(20);
    }

    public function photos(Specie $specie)
    {
        $specie->load('photos');
        return $specie['photos'];
    }

    public function search(Request $request)
    {
        // return $request->all();
        $results = Specie::query();
        // $results_full_name = Specie::query();

        $results->when($request->get('searchFilters') == true, function ($sub_query) use ($request) {
            $favourite_filter = $request->get('favourite');
            $albania_filter = $request->get('in_albania');
            $family_filter = $request->get('family_id');
            $genera_filter = $request->get('genera_id');

            if ($favourite_filter) {
                $sub_query->has('favourites');
            }

            if ($albania_filter) {
                $sub_query->where('in_albania', 1);
            }

            if ($family_filter) {
                $sub_query->whereHas('genera.family', function ($q) use ($family_filter) {
                    $q->where('id', $family_filter);
                });
            }

            if ($genera_filter) {
                $sub_query->whereHas('genera', function ($q) use ($genera_filter) {
                    $q->where('id', $genera_filter);
                });
            }

            return $sub_query;
        });

        $results->when($request->get('view') === "species", function ($sub_query) {
            $sub_query->with(['genera', 'genera.family'])->withCount(['favourites' => function ($fav_query) {
                $fav_query->where('user_id', Auth::user()->id);
            }]);
        });
        $results->when($request->get('view') === 'map', function ($sub_query) {
            $sub_query->with('genera');
        });

        $query = $request->get('query');

        // $results_full_name = $results_full_name->whereHas('genera', function ($q) use ($query) {
        //     return $q->where(DB::raw('CONCAT(generas.name, " ", species.name)'), 'like', "%{$query}%");
        // });
        $results = $results->where(function ($q) use ($query) {
            $q
                ->where('name', 'like', "%{$query}%")
                ->orWhere('common_name', 'like', "%{$query}%")
                ->orWhereHas('genera', function ($q) use ($query) {
                    return $q->where(DB::raw('CONCAT(generas.name, " ", species.name)'), 'like', "%{$query}%")
                        ->orWhere('generas.name', 'like', "%{$query}%");
                })
                ->orWhereHas('genera.family', function ($q) use ($query) {
                    return $q->where('name', 'LIKE', "%{$query}%");
                });
        });

        if ($request->get('view') === 'species') {
            $results = $results->paginate(20);
        } else if ($request->get('view') === 'map') {
            $results = $results->limit(5)->get();
        }

        return $results;
        // return $results->get()->toJson();
        // $results = $results->get();

        return new Collection([$results, 'amount' => sizeof($results)]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        $specie = Specie::create($request->only(['name', 'common_name']));
        $specie->in_albania = $request->get('in_albania') === 'true' ? 1 : null;
        $genus = Genera::find($request->get('genera_id'));
        if ($request->hasFile('photo')) {
            foreach ($request->file('photo') as $photo) {
                $new_photo = new Photo();
                $new_photo->specie_id = $specie->id;
                $path = $photo->store('photos', 'public');
                $new_photo->path = $path;
                $new_photo->save();
            }
        }

        $specie->genera()->associate($genus);
        $specie->save();

        return $specie->load('photos');
    }

    public function show(Request $request, $id)
    {
        $specie = Specie::with(['genera', 'genera.family'])->findOrFail($id);
        return $specie;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Specie  $specie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $specie = Specie::find($request->get('id'));

        $specie->name = $request->get('name', '');
        if ($request->get('common_name') !== "null")
            $specie->common_name = $request->get('common_name', '');
        $specie->ipni = $request->get('ipni');
        $specie->year = $request->get('year');
        $specie->authorship = $request->get('authorship');
        $specie->in_albania = $request->get('in_albania') === 'true' ? 1 : null;

        if ($request->hasFile('photo')) {
            foreach ($request->file('photo') as $photo) {
                $new_photo = new Photo();
                $new_photo->specie_id = $specie->id;
                $path = $photo->store('photos', 'public');
                $new_photo->path = $path;
                $new_photo->save();
            }
        }

        $specie->genera_id = $request->get('genera_id');
        $specie->genera_name = Genera::find($request->get('genera_id'))->pluck('name');
        $specie->save();

        return Specie::with(['genera', 'genera.family', 'photos'])->find($specie->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Specie  $specie
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $specie = Specie::find($id)->delete();
        return $id;
    }
}
