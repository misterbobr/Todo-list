<?php

use App\Models\TodoList;
use App\Http\Controllers\ListController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::get('/', function () {
    return view('home');
});

Route::get('/getData', [ListController::class, 'getData'])->name('getData');

Route::post('/login', []);

Route::post('/add', [ListController::class, 'addNote']);
Route::post('/remove', [ListController::class, 'removeNote']);

//Route::post('/add', 'App\Http\Controllers\ListController@Add');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
