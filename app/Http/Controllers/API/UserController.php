<?php

namespace App\Http\Controllers\API;

use App\Favourite;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::paginate(20);
    }

    public function favouritesIndex()
    {
        return Auth()->user()->favourites()->with(['specie', 'specie.genus', 'specie.genus.family'])->paginate(20);
    }

    public function favouriteSpecie($id)
    {
        $user = Auth::user()->id;
        $fav = Favourite::where(['specie_id' => $id, 'user_id' => $user])->first();

        if ($fav) {
            $fav->delete();
        } else {
            $fav = new Favourite();
            $fav->user_id = $user;
            $fav->specie_id = $id;
            $fav->save();
        }

        return response()->json($fav->toJson());
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
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
    }
}
