<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CatBreedController;
use App\Http\Controllers\PhysicalAttributeController;
use App\Models\CatBreed;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::apiResource('cat-breeds', CatBreedController::class);
Route::apiResource('physical-attributes', PhysicalAttributeController::class);


