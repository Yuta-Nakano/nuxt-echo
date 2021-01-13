<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1'], function () {
    /**
     * Login
     */
    Route::post('login', 'AuthController@authenticate')->name('login');

    Route::group(['as' => 'api.v1.'], function () {
        // test
        Route::get('test', fn () => response(['test'], 200));

        Route::get('run-queue', 'EchoQueueController@runQueue');
        Route::get('run-echo', 'EchoQueueController@runEcho');

        /**
         * Authentication Required Route
         */
        Route::group(['middleware' => 'auth:sanctum'], function () {
            // User
            Route::get('user', 'AuthController@user');
        });
    });
});
