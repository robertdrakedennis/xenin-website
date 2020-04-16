<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\User $user
     * @return array|string
     */
    public function show(User $user){
        return $user->toJson();
    }
}
