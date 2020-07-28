<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class JWTRefreshController extends Controller
{
    /**
     *
     * Refresh a Token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     *
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithToken($token)
    {
        return \response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user(),
        ]);
    }
}
