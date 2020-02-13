<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('families', 'FamilyController');
Route::resource('genera', 'GeneraController');
Route::resource('favourites', 'FavouritesController');
Route::resource('plants', 'PlantController');
Route::resource('users', 'UserController');

Route::group(['prefix' => '/dashboard'], function (){
    Route::get('/plants', 'NavigationController@plants')->name('plants');
    Route::get('/plants/create', 'PlantController@create')->name('plants.create');

    Route::get('/families', 'NavigationController@families')->name('families');
    Route::get('/families/create', 'FamilyController@create')->name('families.create');
    Route::get('/families/{family}', 'FamilyController@show')->name('families.show');

    Route::get('/genera', 'NavigationController@genera')->name('genera');
    Route::get('/genera/create', 'GeneraController@create')->name('genera.create');
    Route::get('/genera/{genera}', 'GeneraController@show')->name('genera.show');

    Route::get('/favourites', 'NavigationController@favourites')->name('favourites');
    Route::get('/albanian', 'PlantController@albanian_plants')->name('albanian_plants');
    Route::get('/users', 'NavigationController@users')->name('users');
});

Route::get('/', 'NavigationController@home')->name('home');

Route::get('/all_families', 'FamilyController@all_families')->name('all_families');
Route::get('/genera_of_family/{family}', 'GeneraController@generaOfFamily')->name('genera_of_family');
Route::get('/species_of_genera/{genera}', 'PlantController@speciesOfGenera')->name('species_of_genera');

Auth::routes(['register' => false]);
