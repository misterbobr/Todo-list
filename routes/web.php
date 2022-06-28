<?php

use App\Models\TodoList;
use App\Http\Controllers\ListController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::get('/', function () {
    return view('home');
});
Route::get('/register', function () {
    return view('register');
});
Route::get('/isLogged', function() {
    return response()->json(["result" => Auth::check()]);
});

Route::get('/getData', [ListController::class, 'getData'])->name('getData');

Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
Route::post('/register', [RegisterController::class, 'register_'])->name('register');

Route::post('/add', [ListController::class, 'addNote']);
Route::post('/edit', [ListController::class, 'editNote']);
Route::post('/remove', [ListController::class, 'removeNote']);

//Route::post('/add', 'App\Http\Controllers\ListController@Add');

