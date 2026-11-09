<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Testimonial;
use App\Models\TravelRoute;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return view('admin.dashboard', [
            'stats' => [
                'users' => User::count(),
                'routes' => TravelRoute::count(),
                'vehicles' => Vehicle::count(),
                'bookings' => Booking::count(),
                'bookingsPending' => Booking::where('status', 'pending')->count(),
                'bookingsConfirmed' => Booking::where('status', 'confirmed')->count(),
                'bookingsDone' => Booking::where('status', 'done')->count(),
                'testimonials' => Testimonial::count(),
                'revenue' => Booking::whereIn('status', ['confirmed', 'done'])->sum('total_price'),
            ],
            'recentBookings' => Booking::with('route')->latest()->take(10)->get(),
        ]);
    }
}
