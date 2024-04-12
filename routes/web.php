<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//login awal langsung dihandle oleh Provider/RouteServiceProvider
Route::resource('products', \App\Http\Controllers\ProductController::class)->middleware('auth', 'verified');

Route::get('/', [\App\Http\Controllers\WelcomeController::class, 'index'])->name('welcome');
Route::post('/', [\App\Http\Controllers\WelcomeController::class, 'store'])->name('welcome.store')->middleware('auth', 'verified');
Route::put('/{id}', [\App\Http\Controllers\WelcomeController::class, 'update'])->name('welcome.update');
Route::get('/asc', [\App\Http\Controllers\WelcomeController::class, 'asc'])->name('welcome.azselections');
Route::get('/desc', [\App\Http\Controllers\WelcomeController::class, 'desc'])->name('welcome.zaselections');
Route::get('/high', [\App\Http\Controllers\WelcomeController::class, 'high'])->name('welcome.highestpriced');
Route::get('/low', [\App\Http\Controllers\WelcomeController::class, 'low'])->name('welcome.lowestpriced');
// Route::get('/top', [\App\Http\Controllers\WelcomeController::class, 'top'])->name('welcome.toprated');
// Route::get('/most', [\App\Http\Controllers\WelcomeController::class, 'most'])->name('welcome.mostreviews');


Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home')->middleware('auth', 'verified');
Route::post('/home', [\App\Http\Controllers\HomeController::class, 'logout'])->name('home.logout')->middleware('auth', 'verified');


Route::get('/user', [\App\Http\Controllers\UserController::class, 'index'])->name('user.index')->middleware('auth', 'verified');
Route::post('/user', [\App\Http\Controllers\UserController::class, 'store'])->name('user.store')->middleware('auth', 'verified');
Route::delete('/user/{id}', [\App\Http\Controllers\UserController::class, 'destroy'])->name('user.destroy')->middleware('auth', 'verified');
Route::put('/user/{id}', [\App\Http\Controllers\UserController::class, 'update'])->name('user.update')->middleware('auth', 'verified');

Route::post('/order', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store')->middleware('auth', 'verified');
Route::get('/order', [\App\Http\Controllers\OrderController::class, 'index'])->name('order.index')->middleware('auth', 'verified');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'admin'])->name('dashboard');//unutuk auth admin di [kernel, Middleware/adminMiddleware]



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
