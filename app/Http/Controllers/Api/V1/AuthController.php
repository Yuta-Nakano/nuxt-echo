<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Auth
     *
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return response([
                'message' => ['Unauthorized.']
            ], 401);
        }

        /**
         * When performing Token authentication
         */
        // $token = auth()
        //     ->user()
        //     ->createToken('xxxxx')
        //     ->plainTextToken;

        return response('', 200);
    }

    /**
     * User
     *
     * @return \Illuminate\Http\Response
     */
    public function user(Request $request)
    {
        return $request->user()->only('id');
    }
}
