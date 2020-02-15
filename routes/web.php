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

Route::get('families', 'FamilyController@indexApi');
Route::get('/all_families', 'FamilyController@all_families');

Route::get('genera', 'GeneraController@indexApi');
Route::get('/genera_of_family/{family}', 'GeneraController@generaOfFamily');

Route::get('plants', 'PlantController@indexApi');
Route::get('/plants_of_genera/{genera}', 'PlantController@plantsOfGenera');

Route::get('/filter', 'FilterController@indexApi');

Route::get('users', 'UserController@indexApi');
Route::get('favourites', 'FavouriteController@indexApi');
Route::get('/albanian', 'PlantController@albanianApi');


Route::group(['prefix' => '/dashboard'], function (){
    Route::resource('families', 'FamilyController');
    Route::resource('genera', 'GeneraController');
    Route::resource('plants', 'PlantController');
    Route::resource('favourites', 'FavouriteController');
    Route::resource('users', 'UserController');

    Route::get('/albanian', 'PlantController@albanian')->name('albanian_plants');

    Route::get('/filter/form', 'FilterController@form')->name('filter.form');
    Route::get('/filter', 'FilterController@index')->name('filter.index');

//    Route::get('/plants', 'NavigationController@plants')->name('plants');
//    Route::get('/plants/create', 'PlantController@create')->name('plants.create');
//    Route::get('/plants/{plant}', 'PlantController@show')->name('plants.show');

//    Route::get('/families', 'NavigationController@families')->name('families');
//    Route::get('/families/create', 'FamilyController@create')->name('families.create');
//    Route::get('/families/{family}', 'FamilyController@show')->name('families.show');

//    Route::get('/genera', 'NavigationController@genera')->name('genera');
//    Route::get('/genera/create', 'GeneraController@create')->name('genera.create');
//    Route::get('/genera/{genera}', 'GeneraController@show')->name('genera.show');

//    Route::get('/favourites', 'NavigationController@favourites')->name('favourites');
//    Route::get('/users', 'NavigationController@users')->name('users');
//    Route::get('/albanian', 'NavigationController@albanian_plants')->name('albanian');
});

Route::get('/', 'NavigationController@home')->name('home');





Auth::routes(['register' => false]);
