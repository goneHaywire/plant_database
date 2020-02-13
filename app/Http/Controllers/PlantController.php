<?php

namespace App\Http\Controllers;

use App\Genera;
use App\Plant;
use Illuminate\Http\Request;

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $plants = Plant::with(['genera', 'genera.family'])->paginate(20);
        $response = [
            'pagination' => [
                'total' => $plants->total(),
                'per_page' => $plants->perPage(),
                'current_page' => $plants->currentPage(),
                'last_page' => $plants->lastPage(),
                'from' => $plants->firstItem(),
                'to' => $plants->lastItem()
            ],
            'data' => $plants
        ];
        return response()->json($response);
    }

    public function speciesOfGenera(Genera $genera){
//        dd($genera->plants);
        return response()->json($genera->plants);
    }

    public function albanian_plants()
    {
        $plants = Plant::where('in_albania', 1)->paginate(20);
        return view('dashboard.albanian.index')->with(['plants' => $plants, 'pagination' => $plants]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.plants.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->plant_id){
//            dd($request->all());
            $plant = new Plant();
            $plant->specie_name = $request->name;
            $plant->common_name = $request->cname;
            $plant->in_albania = $request->in_albania == "on" ? 1 : 0;
            $plant->genera_id = $request->genera_id;
            $plant->family_id = $request->family_id;
            $plant->save();
            return redirect()->route('plants');
        } else {
            $plant = Plant::find($request->plant_id);
            $plant->name = $request->name;
            $plant->cname = $request->cname;
            $plant->in_albania = $request->in_albania == "on" ? 1 : 0;
            $plant->genera_id = $request->genera_id;
            $plant->family_id = $request->family_id;
            $plant->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Plant  $plant
     * @return \Illuminate\Http\Response
     */
    public function show(Plant $plant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Plant  $plant
     * @return \Illuminate\Http\Response
     */
    public function edit(Plant $plant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Plant  $plant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Plant $plant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Plant  $plant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Plant $plant)
    {
        //
    }
}
