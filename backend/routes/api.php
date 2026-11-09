<?php

use App\Http\Controllers\Api\BookingApiController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::get('routes', [BookingApiController::class, 'routes']);
    Route::get('vehicles', [BookingApiController::class, 'vehicles']);
    Route::get('testimonials', [BookingApiController::class, 'testimonials']);
    Route::post('bookings', [BookingApiController::class, 'store'])->middleware('throttle:20,1');
});
