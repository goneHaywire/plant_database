<?php

namespace App\Http\Controllers;

use App\Genera;
use App\Specie;
use Illuminate\Http\Request;

class SpecieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(){
        return view('dashboard.species.index');
    }

    public function indexApi()
    {
        $species = Specie::with(['genera', 'genera.family', 'favourites'])->paginate(20);
        $response = [
            'pagination' => [
                'total' => $species->total(),
                'per_page' => $species->perPage(),
                'current_page' => $species->currentPage(),
                'last_page' => $species->lastPage(),
                'from' => $species->firstItem(),
                'to' => $species->lastItem()
            ],
            'data' => $species
        ];
        return response()->json($response);
    }

    public function speciesOfGenera(Genera $genera){
//        dd($genera->species);
        return response()->json($genera->species);
    }

    public function albanianApi(){
        $species = Specie::with(['genera', 'genera.family', 'favourites'])->where('in_albania', 1)->paginate(20);
        $response = [
            'pagination' => [
                'total' => $species->total(),
                'per_page' => $species->perPage(),
                'current_page' => $species->currentPage(),
                'last_page' => $species->lastPage(),
                'from' => $species->firstItem(),
                'to' => $species->lastItem()
            ],
            'data' => $species
        ];
        return response()->json($response);
    }

    public function albanian()
    {
        return view('dashboard.albanian.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.species.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->specie_id){
//            dd($request->all());
            $specie = new Specie();
            $specie->specie_name = $request->name;
            $specie->common_name = $request->cname;
            $specie->in_albania = $request->in_albania == "on" ? 1 : 0;
            $specie->genera_id = $request->genera_id;
            $specie->family_id = $request->family_id;
            $specie->save();
            return redirect()->route('species.index');
        } else {
            $specie = Specie::find($request->specie_id);
            $specie->name = $request->name;
            $specie->cname = $request->cname;
            $specie->in_albania = $request->in_albania == "on" ? 1 : 0;
            $specie->genera_id = $request->genera_id;
            $specie->family_id = $request->family_id;
            $specie->save();
            return redirect()->route('species.show', $request->specie_id);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Specie  $specie
     * @return \Illuminate\Http\Response
     */
    public function show($specie)
    {
        $specie = Specie::with('genera', 'genera.family')->find(intval($specie));
        return view('dashboard.species.show')->with('specie', $specie);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Specie  $specie
     * @return \Illuminate\Http\Response
     */
    public function edit(Specie $specie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Specie  $specie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Specie $specie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Specie  $specie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Specie $specie)
    {
        //
    }
}
