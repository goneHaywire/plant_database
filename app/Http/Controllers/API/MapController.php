<?php

namespace App\Http\Controllers\API;

use App\Area;
use App\Http\Controllers\Controller;
use App\Polygon;
use App\Specie;
use Illuminate\Http\Request;

class MapController extends Controller
{
    /**
     * Display a listing of all areas.
     *
     * @return \Illuminate\Http\Response
     */
    public function areas()
    {
        return Area::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function soil_polygons()
    {
        return Polygon::with('area')->soilOnly()->get();
    }

    public function specie_polygons(Specie $specie)
    {
        return $specie->load(['polygons', 'polygons.area'])->polygons;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
