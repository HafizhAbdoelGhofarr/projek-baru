<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

Route::get('/users', function () {
    $users = User::all();

    return Inertia::render('Users', [
        'users' => $users
    ]);
});

Route::get('/test', function () {
    return User::all();
});

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
