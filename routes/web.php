<?php

use App\Models\TodoList;
use App\Http\Controllers\ListController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::post('/add', [ListController::class, 'Add']);

//Route::post('/add', 'App\Http\Controllers\ListController@Add');