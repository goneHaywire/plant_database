<?php

namespace App\Http\Controllers;

use App\Family;
use App\Genera;
use Illuminate\Http\Request;

class GeneraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return view('dashboard.genera.index');
    }

    public function indexApi()
    {
        $genera = Genera::with(['family'])->paginate(20);
        $response = [
            'pagination' => [
                'total' => $genera->total(),
                'per_page' => $genera->perPage(),
                'current_page' => $genera->currentPage(),
                'last_page' => $genera->lastPage(),
                'from' => $genera->firstItem(),
                'to' => $genera->lastItem()
            ],
            'data' => $genera
        ];
        return response()->json($response);
    }

    public function generaOfFamily(Family $family){
//        dd($family->genera);
        return response()->json($family->genera);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $families = Family::all();
        return view('dashboard.genera.create')->with('families', $families);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->genera_id){
            $genera = new Genera();
            $genera->name = $request->name;
            $genera->family_id = $request->family;
            $genera->save();
            return redirect()->route('genera.index');
        } else {
            $genera = Genera::find($request->genera_id);
            $genera->name = $request->name;
            $genera->family_id = $request->family;
            $genera->save();
            return redirect()->route('genera.show', $request->genera_id);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Genera  $genera
     * @return \Illuminate\Http\Response
     */
    public function show($genera)
    {

//        dd($genera);
//        $genera->load('family');
        $genera = Genera::with('family')->find(intval($genera));
//        dd($genera->toArray());
        return view('dashboard.genera.show')->with('genus', $genera);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Genera  $genera
     * @return \Illuminate\Http\Response
     */
    public function edit(Genera $genera)
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
