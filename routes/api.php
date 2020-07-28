<?php

use Illuminate\Http\Request;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',

], function ($router) {
    Route::post('login', 'AuthController@login')->name('login');
//     Route::get('test', function() {
    //         // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NTg2MjU2NywiZXhwIjoxNTk1ODYyNjI3LCJuYmYiOjE1OTU4NjI1NjcsImp0aSI6IjdwbkpyeDQyU1A4cmJEWE0iLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.VAjNHGXij_aihs-wvXWaTZ_37qv3j_riIA_2GaUItxU
    // $token = "eyJ1eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NTg2MjU2NywiZXhwIjoxNTk1ODYyNjI3LCJuYmYiOjE1OTU4NjI1NjcsImp0aSI6IjdwbkpyeDQyU1A4cmJEWE0iLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.VAjNHGXij_aihs-wvXWaTZ_37qv3j_riIA_2GaUItxU";
    //         return response()->json([
    //             'access_token' => $token,
    //             'token_type' => 'bearer',
    //             'expires_in' => auth()->factory()->getTTL() * 60,
    //             'user' => auth()->user()
    //         ]);
    //     });
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout')->name('logout');
    Route::post('refresh', 'AuthController@refresh')->name('refresh');
    Route::get('user-profile', 'AuthController@userProfile')->name('user-profile');
    Route::post('verify', 'AuthController@verifyToken');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', function () {
        return 'lesh';
    });
    Route::get('families', 'FamilyController@indexApi');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/test', 'AuthController@test');
