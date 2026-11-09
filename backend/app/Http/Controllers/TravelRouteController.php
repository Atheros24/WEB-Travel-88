<?php

namespace App\Http\Controllers;

use App\Models\TravelRoute;
use Illuminate\Http\Request;

class TravelRouteController extends Controller
{
    public function index()
    {
        return view('admin.routes.index', ['routes' => TravelRoute::latest()->paginate(15)]);
    }

    public function store(Request $request)
    {
        TravelRoute::create($this->validateData($request));

        return back()->with('ok', 'Rute ditambahkan.');
    }

    public function update(Request $request, TravelRoute $route)
    {
        $route->update($this->validateData($request));

        return back()->with('ok', 'Rute diperbarui.');
    }

    public function destroy(TravelRoute $route)
    {
        $route->delete();

        return back()->with('ok', 'Rute dihapus.');
    }

    private function validateData(Request $request): array
    {
        $data = $request->validate([
            'origin' => ['required', 'string', 'max:100'],
            'destination' => ['required', 'string', 'max:100'],
            'price' => ['required', 'integer', 'min:0'],
            'price_round_trip' => ['required', 'integer', 'min:0'],
            'duration' => ['nullable', 'string', 'max:50'],
            'badge' => ['nullable', 'string', 'max:50'],
            'is_active' => ['boolean'],
        ]);
        $data['is_active'] = $request->boolean('is_active');
        $data['slug'] = str($data['origin'].'-'.$data['destination'])->slug()->value();

        return $data;
    }
}
