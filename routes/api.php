<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::prefix('users')->group(function (){
    Route::get('{user}', 'Api\UsersController@Show');
});



Route::prefix('news')->group(function (){
    Route::get('{article}', 'Api\ArticleController@show');
    Route::get('/', 'Api\ArticleController@ShowAll');
});

