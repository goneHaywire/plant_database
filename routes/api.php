<?php

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
    'namespace' => 'Auth',
], function ($router) {
    Route::post('login', 'LoginController')->name('login');
    Route::post('register', 'RegisterController')->name('register');
    Route::post('logout', 'LogoutController')->name('logout');
    Route::post('refresh', 'JWTRefreshController')->name('refresh');
    Route::get('profile', 'ProfileController')->name('user-profile');
    Route::post('verify', 'JWTVerifyController')->name('verify');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', function () {
        return 'lesh';
    });
    // Route::apiResource('families', 'API\FamilyController');
    Route::apiResources([
        'families' => 'API\FamilyController',
        'genera' => 'API\GeneraController',
        'species' => 'API\SpeciesController',
        'users' => 'API\UserController',
    ]);
    Route::get('/stats', 'API\HomeController@stats');
    Route::get('/favourites', 'API\UserController@favouritesIndex');
    Route::get('/albanian', 'API\SpeciesController@albanianIndex');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/test', 'AuthController@test');
