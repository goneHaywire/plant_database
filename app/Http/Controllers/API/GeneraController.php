<?php

namespace App\Http\Controllers\API;

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
        return Genera::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Genera  $genera
     * @return \Illuminate\Http\Response
     */
    public function show(Genera $genera)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Genera  $genera
     * @return \Illuminate\Http\Response
     */
    public function destroy(Genera $genera)
    {
        //
    }
}
