<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Testimonial;
use App\Models\TravelRoute;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class BookingApiController extends Controller
{
    public function routes()
    {
        return TravelRoute::where('is_active', true)->orderBy('destination')->get();
    }

    public function vehicles()
    {
        return Vehicle::where('is_active', true)->orderBy('pax')->get();
    }

    public function testimonials()
    {
        return Testimonial::where('is_published', true)->latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'customer_name' => ['required', 'string', 'max:150'],
            'phone' => ['required', 'string', 'max:30'],
            'travel_route_id' => ['nullable', 'exists:travel_routes,id'],
            'vehicle_id' => ['nullable', 'exists:vehicles,id'],
            'trip_type' => ['required', 'in:single,pp'],
            'travel_date' => ['required', 'date', 'after_or_equal:today'],
            'pax' => ['required', 'integer', 'min:1', 'max:99'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);

        $route = isset($data['travel_route_id']) ? TravelRoute::find($data['travel_route_id']) : null;
        $data['total_price'] = $route
            ? ($data['trip_type'] === 'pp' ? $route->price_round_trip : $route->price) * $data['pax']
            : 0;
        $data['code'] = Booking::generateCode();

        $booking = Booking::create($data);

        return response()->json(['ok' => true, 'code' => $booking->code, 'total_price' => $booking->total_price], 201);
    }
}
