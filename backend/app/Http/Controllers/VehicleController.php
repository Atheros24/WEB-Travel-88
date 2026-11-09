<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VehicleController extends Controller
{
    public function index()
    {
        return view('admin.vehicles.index', ['vehicles' => Vehicle::latest()->paginate(15)]);
    }

    public function store(Request $request)
    {
        Vehicle::create($this->validateData($request));

        return back()->with('ok', 'Armada ditambahkan.');
    }

    public function update(Request $request, Vehicle $vehicle)
    {
        $data = $this->validateData($request, $vehicle);
        $vehicle->update($data);

        return back()->with('ok', 'Armada diperbarui.');
    }

    public function destroy(Vehicle $vehicle)
    {
        $this->deleteImage($vehicle->image);
        $vehicle->delete();

        return back()->with('ok', 'Armada dihapus.');
    }

    private function validateData(Request $request, ?Vehicle $vehicle = null): array
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'class' => ['required', 'string', 'max:100'],
            'pax' => ['required', 'integer', 'min:1', 'max:99'],
            'price_per_day' => ['nullable', 'integer', 'min:0'],
            'image' => ['nullable', 'string', 'max:255'],
            'image_file' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:4096'],
            'remove_image' => ['boolean'],
            'is_active' => ['boolean'],
        ]);
        unset($data['image_file'], $data['remove_image']);

        $data['is_active'] = $request->boolean('is_active');
        $data['slug'] = str($data['name'])->slug()->value();

        if ($request->hasFile('image_file')) {
            $this->deleteImage($vehicle?->image);
            // stored on the public disk -> served (and proxied by Next) at /storage/...
            $path = $request->file('image_file')->store('vehicles', 'public');
            $data['image'] = '/storage/'.$path;
        } elseif ($request->boolean('remove_image')) {
            $this->deleteImage($vehicle?->image);
            $data['image'] = null;
        }

        return $data;
    }

    private function deleteImage(?string $url): void
    {
        if (! $url) {
            return;
        }
        $path = parse_url($url, PHP_URL_PATH) ?? '';
        $rel = ltrim(str_replace('/storage/', '', $path), '/');
        if ($rel && Storage::disk('public')->exists($rel)) {
            Storage::disk('public')->delete($rel);
        }
    }
}
