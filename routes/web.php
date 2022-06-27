<?php

use App\Models\TodoList;
use App\Http\Controllers\ListController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::get('/', function () {
    return view('home');
});
Route::get('/register', function () {
    return view('register');
});

Route::get('/getData', [ListController::class, 'getData'])->name('getData');

Route::post('/login', function() {
    return view('test');
});
Route::post('/register', [RegisterController::class, 'register']);

Route::post('/add', [ListController::class, 'addNote']);
Route::post('/remove', [ListController::class, 'removeNote']);

//Route::post('/add', 'App\Http\Controllers\ListController@Add');

