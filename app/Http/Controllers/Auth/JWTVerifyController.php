<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class JWTVerifyController extends Controller
{
    /**
     *
     * Verifies token.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $token = $request->get('token');

        try {
            $user = JWTAuth::setToken($token)->toUser();
            if ($user !== null) {
                return response()->json(['message' => 'Token Valid']);
            }
        } catch (\Exception $e) {
            return \response()->json(['error' => 'Token Expired'], 401);
        }
    }
}
