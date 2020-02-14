<?php

namespace App\Http\Controllers;

use App\Family;
use Illuminate\Http\Request;

class FamilyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return view('dashboard.families.index');
    }

    public function indexApi()
    {
        $families = Family::paginate(20);
        $response = [
            'pagination' => [
                'total' => $families->total(),
                'per_page' => $families->perPage(),
                'current_page' => $families->currentPage(),
                'last_page' => $families->lastPage(),
                'from' => $families->firstItem(),
                'to' => $families->lastItem()
            ],
            'data' => $families
        ];
        return response()->json($response);
    }

    public function all_families(){
        return response()->json(Family::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.families.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dd($request->all());
        if (!$request->family_id){
            $family = new Family();
            $family->name = $request->name;
            $family->description = $request->desc;
            $family->leaves = $request->leaves;
            $family->flowers = $request->flowers;
            $family->seeds = $request->seeds;
            $family->characteristics = $request->characteristics;
            $family->save();
            return redirect()->route('families.index');
        } else {
            $family = Family::find($request->family_id);
            $family->name = $request->name;
            $family->description = $request->desc;
            $family->leaves = $request->leaves;
            $family->flowers = $request->flowers;
            $family->seeds = $request->seeds;
            $family->characteristics = $request->characteristics;
            $family->save();
            return redirect()->route('families.show', $request->family_id);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Family  $family
     * @return \Illuminate\Http\Response
     */
    public function show(Family $family)
    {
        return view('dashboard.families.show')->with(['family' => $family]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Family  $family
     * @return \Illuminate\Http\Response
     */
    public function edit(Family $family)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Family  $family
     * @return \Illuminate\Http\Response
     */
    public function destroy(Family $family)
    {
        //
    }
}
