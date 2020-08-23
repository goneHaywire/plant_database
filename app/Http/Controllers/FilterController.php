<?php

namespace App\Http\Controllers;

use App\Specie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FilterController extends Controller
{
    public function form()
    {
        return view('dashboard.filter.form');
    }

    public function index(Request $request)
    {
        $name = $request->get('name');
        $common_name = $request->get('common_name');
        $in_albania = $request->get('in_albania');
        $family = $request->get('family_id', "*");
        $genera = $request->get('genera_id', "*");

        $url = '';

        foreach ($request->all() as $parameter => $value) {
            if ($parameter === "_token")
                $url .= "?{$parameter}={$value}";
            elseif ($parameter === "page")
                continue;
            else
                $url .= "&{$parameter}={$value}";
        }

//        return $url;
//
//        return json_decode(json_encode($request->all()), true);
//        return array($request->all());

        $species = Specie::with('genera', 'genera.family', 'favourites');
//       whereHas('permissions', $function($q) {
//        $q->where('name', $value)->orWhere('name', $value2);
//    });
        $species->when(!(is_null($name)), function ($query) use ($name) {
            $query->whereHas('genera', function ($test) use ($name) {
                return $test->where(DB::raw('CONCAT(generas.name, " ", specie_name)'), 'like', '%' . $name . '%')
                    ->orWhere(DB::raw('CONCAT(specie_name, " ", generas.name)'), 'like', '%' . $name . '%');
            });
        });

        $species->when(!(is_null($common_name)), function ($query) use ($common_name) {
            return $query->where('common_name', 'like', '%' . $common_name . '%');
        });

        $species->when($in_albania === "1", function ($query) {
            return $query->where('in_albania', "1");
        });

        $species->when($in_albania === "2", function ($query) {
            return $query->whereNull('in_albania');
        });

        $species->when($family !== "*", function ($query) use ($family) {
            return $query->where('family_id', $family);
        });

        $species->when($genera !== "*", function ($query) use ($genera) {
            return $query->where('genera_id', $genera);
        });
//        dd($species->toSql());
        $species = $species->paginate(20);

//        return url(route('filter.index'), $request->all());

        $response = [
            'pagination' => [
                'total' => $species->total(),
                'per_page' => $species->perPage(),
                'current_page' => $species->currentPage(),
                'last_page' => $species->lastPage(),
                'from' => $species->firstItem(),
                'to' => $species->lastItem()
            ],
            'data' => $species,
            'url' => route('filter.index') . $url
        ];

        if ($request->ajax()) {
            return response()->json($response);
        } else {
//            return $species;
            return view('dashboard.filter.index')->with('response', json_encode($response));
        }
    }


//    public function index(Request $request){
//        return view('dashboard.filter.index')->with('query', $request->all());
//    }
}
