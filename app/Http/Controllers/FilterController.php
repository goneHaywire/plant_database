<?php

namespace App\Http\Controllers;

use App\Plant;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function form(){
        return view('dashboard.filter.form');
    }

    public function index(Request $request){
        $name = $request->get('name');
        $common_name = $request->get('common_name');
        $in_albania = $request->get('in_albania');
        $family = $request->get('family_id', "*");
        $genera = $request->get('genera_id', "*");

        $url = '';

        foreach ($request->all() as $parameter => $value){
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

        $plants = Plant::with('genera', 'genera.family');

        $plants->when(!(is_null($name)), function($query) use ($name) {
            return $query->where('specie_name', 'like', '%'.$name.'%');
        });

        $plants->when(!(is_null($common_name)), function($query) use ($common_name) {
            return $query->where('common_name', 'like', '%'.$common_name.'%');
        });

        $plants->when($in_albania === "1", function($query){
            return $query->where('in_albania', "1");
        });

        $plants->when($in_albania === "2", function($query){
            return $query->whereNull('in_albania');
        });

        $plants->when($family !== "*", function($query) use ($family){
            return $query->where('family_id', $family);
        });

        $plants->when($genera !== "*", function($query) use ($genera){
            return $query->where('genera_id', $genera);
        });

        $plants = $plants->paginate(20);

//        return url(route('filter.index'), $request->all());

        $response = [
            'pagination' => [
                'total' => $plants->total(),
                'per_page' => $plants->perPage(),
                'current_page' => $plants->currentPage(),
                'last_page' => $plants->lastPage(),
                'from' => $plants->firstItem(),
                'to' => $plants->lastItem()
            ],
            'data' => $plants,
            'url' => route('filter.index').$url
        ];

        if ($request->ajax()) {
            return response()->json($response);
            }
        else {
//            return $plants;
            return view('dashboard.filter.index')->with('response', json_encode($response));
        }
    }


//    public function index(Request $request){
//        return view('dashboard.filter.index')->with('query', $request->all());
//    }
}
