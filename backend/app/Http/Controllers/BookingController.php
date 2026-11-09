<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\TravelRoute;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $q = $request->get('q');
        $status = $request->get('status');
        $bookings = Booking::with('route')->when($q, fn ($b) => $b->where(fn ($w) => $w->where('customer_name', 'ilike', "%{$q}%")->orWhere('phone', 'ilike', "%{$q}%")->orWhere('code', 'ilike', "%{$q}%")))->when($status, fn ($b) => $b->where('status', $status))->latest()->paginate(15)->withQueryString();

        return view('admin.bookings.index', [
            'bookings' => $bookings,
            'q' => $q,
            'status' => $status,
            'routes' => TravelRoute::orderBy('destination')->get(),
            'vehicles' => Vehicle::orderBy('name')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'customer_name' => ['required', 'string', 'max:150'],
            'phone' => ['required', 'string', 'max:30'],
            'travel_route_id' => ['nullable', 'exists:travel_routes,id'],
            'vehicle_id' => ['nullable', 'exists:vehicles,id'],
            'trip_type' => ['required', 'in:single,pp'],
            'travel_date' => ['required', 'date'],
            'pax' => ['required', 'integer', 'min:1', 'max:99'],
            'status' => ['required', 'in:pending,confirmed,onboard,done,cancelled'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);

        $route = isset($data['travel_route_id']) ? TravelRoute::find($data['travel_route_id']) : null;
        $data['total_price'] = $route
            ? ($data['trip_type'] === 'pp' ? $route->price_round_trip : $route->price) * $data['pax']
            : 0;
        $data['code'] = Booking::generateCode();

        $booking = Booking::create($data);

        return back()->with('ok', "Booking {$booking->code} dibuat.");
    }

    public function update(Request $request, Booking $booking)
    {
        $data = $request->validate([
            'status' => ['required', 'in:pending,confirmed,onboard,done,cancelled'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);
        $booking->update($data);

        return back()->with('ok', "Booking {$booking->code} → {$data['status']}.");
    }

    public function destroy(Booking $booking)
    {
        $code = $booking->code;
        $booking->delete();

        return back()->with('ok', "Booking {$code} dihapus.");
    }
}
