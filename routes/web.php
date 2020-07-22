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

Route::get('species', 'SpecieController@indexApi');
Route::get('/species_of_genera/{genera}', 'SpecieController@speciesOfGenera');

Route::get('/filter', 'FilterController@indexApi');

Route::get('users', 'UserController@indexApi');
Route::get('favourites', 'FavouriteController@indexApi');
Route::get('/albanian', 'SpecieController@albanianApi');


Route::group(['prefix' => '/dashboard'], function (){
    Route::resource('families', 'FamilyController');
    Route::resource('genera', 'GeneraController');
    Route::resource('species', 'SpecieController');
    Route::resource('favourites', 'FavouriteController');
    Route::post('/favourites/{specie}', 'FavouriteController@store');
    Route::resource('users', 'UserController');

    Route::get('/albanian', 'SpecieController@albanian')->name('albanian_species');

    Route::get('/filter/form', 'FilterController@form')->name('filter.form');
    Route::get('/filter', 'FilterController@index')->name('filter.index');

    Route::get('/', 'NavigationController@home')->name('home');
//    Route::get('/stats', 'NavigationController@stats')->name('stats');
});
Route::get('/', 'NavigationController@home');

Auth::routes(['register' => false]);
