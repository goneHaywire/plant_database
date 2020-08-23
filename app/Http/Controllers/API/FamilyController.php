<?php

namespace App\Http\Controllers\API;

use App\Family;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FamilyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Family::paginate(20);
    }

    public function allFamilies()
    {
        return Family::get()->toJson();
    }

    public function generaOfFamily(Family $family)
    {
        return $family->load('genera')->genera;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $family = Family::create(
            $request->only(['name', 'description', 'leaves', 'flowers', 'seeds', 'characteristics'])
        );

        return $family;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Family  $family
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Family $family)
    {
        $family->update($request->only(['name', 'description', 'leaves', 'flowers', 'seeds', 'characteristics']));
        return $family;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Family  $family
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $family = Family::find($id)->delete();
        return 'Family deleted';
    }
}
