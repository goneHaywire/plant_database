<?php

namespace App\Http\Controllers\API;

use App\Genera;
use App\Http\Controllers\Controller;
use App\Specie;
use Illuminate\Http\Request;

class SpeciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Specie::with(['genera', 'genera.family', 'favourites'])->paginate(20);
    }

    // public function favouritesIndex()
    // {
    //     return Specie::with(['genera', 'genera.family', 'favourites'])
    //         ->where('in_albania', 1)
    //         ->paginate(20);
    // }

    public function albanianIndex()
    {
        return Specie::with(['genera', 'genera.family', 'favourites'])
            ->where('in_albania', 1)
            ->paginate(20);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $specie = Specie::create($request->only(['name', 'common_name', 'in_albania']));
        $genus = Genera::find($request->get('genera')['id']);
        if ($request->hasFile('photos')) {
            foreach ($request->file('photos') as $photo) {
                $path = $photo->storeAs('photos', "{$genus->name}_{$specie->name}{$time()}");
                $specie->photos()->associate($path);
            }
        }

        $specie->genera()->associate($genus);
        $specie->save();

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

        $specie->name = $request->get('name');
        $specie->common_name = $request->get('common_name');
        $specie->ipni = $request->get('ipni');
        $specie->year = $request->get('year');
        $specie->authorship = $request->get('authorship');
        $specie->in_albania = $request->get('in_albania');

        $specie->genera_id = $request->get('genera')['id'];
        $specie->genera_name = $request->get('genera')['name'];
        $specie->save();

        return $specie;
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
        return 'Specie deleted';
    }
}
