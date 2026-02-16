<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// 1. Home Page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

// 2. About Us Page (Standalone)
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// 3. Ecosystem Page (Bidhaa Zote)
Route::get('/ecosystem', function () {
    return Inertia::render('Ecosystem');
})->name('ecosystem');

// 4. Dashboard & Auth
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/auth.php';