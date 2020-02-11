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

Route::get('/', 'HomeController@home')->name('home');
Route::get('/index', 'HomeController@index')->name('index');
//Route::get('/families', 'HomeController@families')->name('families');
//Route::get('/genera', 'HomeController@genera')->name('genera');
//Route::get('/favourites', 'HomeController@favourites')->name('favourites');
Route::get('/albanian', 'PlantController@albanian_plants')->name('albanian_plants');
//Route::get('/users', 'HomeController@users')->name('users');
Auth::routes(['register' => false]);
