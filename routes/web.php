<?php

use App\Http\Controllers\EventsController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/events', [DashboardController::class, 'Events'])->name('events_index');
    Route::get('/jobs', [DashboardController::class, 'Jobs'])->name('dashboard_jobs');
    Route::get('/department', [DashboardController::class, 'Department'])->name('dashboard_department');
    Route::get('/applicants', [DashboardController::class, 'Applicants'])->name('dashboard_applicants');
    Route::get('/employees', [DashboardController::class, 'Employees'])->name('dashboard_employees');
});

require __DIR__.'/settings.php';

