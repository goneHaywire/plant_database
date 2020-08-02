<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class LogoutController extends Controller
{
    public function __invoke()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully logged out.']);
    }
}