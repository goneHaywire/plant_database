<?php

namespace App\Http\Controllers\API;

use App\Area;
use App\District;
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
        return Area::with(['families', 'families.soil'])->get()->toJson();
    }

    public function soils()
    {
        return Area::where('type', 'soils')->get()->toJson();
    }

    public function districts()
    {
        return District::all()->toJson();
    }

    public function soil_polygons()
    {
        return Polygon::with(['area', 'district', 'area.families', 'area.families.soil'])->soilOnly()->get();
    }

    public function specie_polygons(Specie $specie)
    {
        return $specie->load(['polygons', 'polygons.area', 'polygons.district', 'polygons.area.families', 'polygons.area.families.soil'])->polygons;
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
        $polygon = new Polygon();
        // return json_encode($request->get('coordinates'));
        $polygon->coordinates = json_encode($request->get('coordinates'));
        $polygon->specie_id = $request->get('specie_id');
        $polygon->area_id = $request->get('area_id');
        $polygon->district_id = $request->get('district_id');
        $polygon->save();
        return $polygon->load(['area', 'district']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Polygon::find($id)->delete();
    }
}
