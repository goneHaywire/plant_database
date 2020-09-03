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
    Route::get('/families/all', 'API\FamilyController@allFamilies');
    Route::get('/families/{family}/genera', 'API\FamilyController@generaOfFamily');
    Route::get('/genera/{genera}/species', 'API\GeneraController@speciesOfGenera');
    // Route::delete('/photos/{id}', 'API\PhotoController@destroy');
    Route::get('/stats', 'API\HomeController@stats');
    Route::get('/favourites', 'API\UserController@favouritesIndex');
    Route::post('/favourites/{id}', 'API\UserController@favouriteSpecie');
    Route::get('/albanian', 'API\SpeciesController@albanianIndex');
    Route::get('/areas', 'API\MapController@areas');
    Route::get('/soils', 'API\MapController@soils');
    Route::get('/districts', 'API\MapController@districts');
    Route::get('/polygons/soil', 'API\MapController@soil_polygons');
    Route::get('/polygons/specie/{specie}', 'API\MapController@specie_polygons');
    Route::post('/species/search', 'API\SpeciesController@search');
    Route::post('/genera/search', 'API\GeneraController@search');
    Route::post('/families/search', 'API\FamilyController@search');
    // Route::get('/species/search', 'API\SpeciesController@search');
    Route::get('/species/{specie}/photos', 'API\SpeciesController@photos');
    Route::post('/species/{id}', 'API\SpeciesController@update');
    Route::apiResources([
        'families' => 'API\FamilyController',
        'genera' => 'API\GeneraController',
        'species' => 'API\SpeciesController',
        'users' => 'API\UserController',
    ]);
    Route::apiResource('polygons', 'API\MapController')->only(['store', 'destroy']);
    Route::apiResource('photos', 'API\PhotoController')->only(['destroy', 'store']);
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/test', 'AuthController@test');
