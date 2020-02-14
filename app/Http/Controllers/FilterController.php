<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function filter(){
        return view('dashboard.filter.form');
    }

    public function filterSubmit(){
        return view('dashboard.filter.index');
    }
}
