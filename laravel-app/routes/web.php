<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/login', function (Request $request) {

    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();

        return redirect('/dashboard');
    }

    return back()->withErrors([
        'email' => 'Email atau password salah',
    ]);
});

Route::post('/logout', function (Request $request) {

    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return redirect('/login');
});

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

    Route::get('/admin/events', function () {
        return Inertia::render('admin/EventsAdmin');
    });

    Route::get('/admin/seminars', function () {
        return Inertia::render('admin/SeminarsAdmin');
    });

    Route::get('/admin/lombas', function () {
        return Inertia::render('admin/LombasAdmin');
    });
});

Route::get('/events', function () {
    return Inertia::render('Events');
});

Route::get('/seminars', function () {
    return Inertia::render('Seminars');
});

Route::get('/lombas', function () {
    return Inertia::render('Lombas');
});

Route::get('/seminars/register', function () {
    return Inertia::render('SeminarRegister');
});

Route::get('/lombas/register', function () {
    return Inertia::render('LombaRegister');
});

Route::get('/about', function () {
    return Inertia::render('Users');
})->name('about');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
