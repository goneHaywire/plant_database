<?php

namespace App\Http\Controllers\API;

use App\Family;
use App\Genera;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GeneraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Genera::with('family')->paginate(20);
    }

    public function speciesOfGenera(Genera $genera)
    {
        return $genera->load('species')->species;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $genus = Genera::create($request->only(['name']));
        $family = Family::find($request->get('family_id'));

        $genus->family()->associate($family);
        $genus->save();

        return $genus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Genera  $genera
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Genera $genera)
    {
        $genera = Genera::find($request->get('id'));

        $genera->name = $request->get('name');
        $genera->family_id = $request->get('family_id');
        $genera->save();

        return $genera;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Genera  $genera
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $genera = Genera::find($id)->delete();
        return 'Genera deleted';
    }
}
