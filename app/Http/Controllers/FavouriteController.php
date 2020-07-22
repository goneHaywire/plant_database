<?php

namespace App\Http\Controllers;

use App\Favourite;
use App\Specie;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavouriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::find(1);
        return view('dashboard.favourites.index')->with('user', $user);
    }

    public function indexApi(){
//        $favourites = Favourite::with(['specie', 'specie.genera', 'specie.genera.family'])->where('user_id', Auth::id())->paginate(20);
        $favourites = Favourite::with(['specie', 'specie.genera', 'specie.genera.family'])->where('user_id', 1)->paginate(20);
        $response = [
            'pagination' => [
                'total' => $favourites->total(),
                'per_page' => $favourites->perPage(),
                'current_page' => $favourites->currentPage(),
                'last_page' => $favourites->lastPage(),
                'from' => $favourites->firstItem(),
                'to' => $favourites->lastItem()
            ],
            'data' => $favourites
        ];
        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Specie $specie)
    {
        $user = 1;
        $fav = Favourite::where(['specie_id' => $specie->id, 'user_id' => $user])->first();

        if ($fav) {
            $fav->delete();
        } else {
            $fav = new Favourite();
            $fav->user_id = $user;
            $fav->specie_id = $specie->id;
            $fav->save();
        }

        return response()->json($fav->toJson());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Favourite  $favourite
     * @return \Illuminate\Http\Response
     */
    public function show(Favourite $favourite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Favourite  $favourite
     * @return \Illuminate\Http\Response
     */
    public function edit(Favourite $favourite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Favourite  $favourite
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Favourite $favourite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Favourite  $favourite
     * @return \Illuminate\Http\Response
     */
    public function destroy(Favourite $favourite)
    {
        //
    }
}
