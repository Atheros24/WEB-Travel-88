<?php

namespace Tests\Feature;

use App\Models\Booking;
use App\Models\TravelRoute;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class AdminCrudTest extends TestCase
{
    use RefreshDatabase;

    // 1x1 PNG — no GD dependency
    private function png(): UploadedFile
    {
        $bytes = base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M8AAAMCAoGw1OsAAAAASUVORK5CYII=');

        return UploadedFile::fake()->createWithContent('armada.png', $bytes);
    }

    private function admin(): User
    {
        return User::factory()->create();
    }

    public function test_route_crud_and_public_api_reflects_changes(): void
    {
        $this->actingAs($this->admin())->post('/admin/routes', [
            'origin' => 'Situbondo',
            'destination' => 'Banyuwangi',
            'price' => 120000,
            'price_round_trip' => 240000,
            'duration' => '2 jam',
            'badge' => 'BARU',
            'is_active' => 1,
        ])->assertRedirect();

        $route = TravelRoute::firstWhere('destination', 'Banyuwangi');
        $this->assertNotNull($route);

        $this->getJson('/api/v1/routes')->assertOk()->assertJsonFragment(['destination' => 'Banyuwangi', 'price' => 120000]);

        $this->actingAs($this->admin())->put("/admin/routes/{$route->id}", [
            'origin' => 'Situbondo',
            'destination' => 'Banyuwangi',
            'price' => 150000,
            'price_round_trip' => 300000,
            'is_active' => 1,
        ])->assertRedirect();

        $this->getJson('/api/v1/routes')->assertJsonFragment(['price' => 150000]);

        $this->actingAs($this->admin())->delete("/admin/routes/{$route->id}")->assertRedirect();
        $this->getJson('/api/v1/routes')->assertJsonMissing(['destination' => 'Banyuwangi']);
    }

    public function test_vehicle_crud_uploads_image_and_public_api_returns_it(): void
    {
        Storage::fake('public');

        $this->actingAs($this->admin())->post('/admin/vehicles', [
            'name' => 'Toyota Avanza',
            'class' => 'MPV',
            'pax' => 7,
            'image_file' => $this->png(),
            'is_active' => 1,
        ])->assertRedirect();

        $vehicle = Vehicle::firstWhere('name', 'Toyota Avanza');
        $this->assertNotNull($vehicle);
        $this->assertStringStartsWith('/storage/vehicles/', $vehicle->image);
        $this->assertTrue(Storage::disk('public')->exists(str_replace('/storage/', '', $vehicle->image)));

        $this->getJson('/api/v1/vehicles')->assertOk()->assertJsonFragment([
            'name' => 'Toyota Avanza',
            'image' => $vehicle->image,
        ]);

        $old = $vehicle->image;
        $this->actingAs($this->admin())->put("/admin/vehicles/{$vehicle->id}", [
            'name' => 'Toyota Avanza',
            'class' => 'MPV',
            'pax' => 8,
            'image_file' => $this->png(),
            'is_active' => 1,
        ])->assertRedirect();

        $vehicle->refresh();
        $this->assertSame(8, $vehicle->pax);
        $this->assertNotSame($old, $vehicle->image);
        $this->assertFalse(Storage::disk('public')->exists(str_replace('/storage/', '', $old)), 'old image should be deleted');

        $this->actingAs($this->admin())->delete("/admin/vehicles/{$vehicle->id}")->assertRedirect();
        $this->assertNull(Vehicle::find($vehicle->id));
        $this->assertFalse(Storage::disk('public')->exists(str_replace('/storage/', '', $vehicle->image)));
    }

    public function test_booking_crud(): void
    {
        $route = TravelRoute::create([
            'slug' => 'situbondo-surabaya',
            'origin' => 'Situbondo',
            'destination' => 'Surabaya',
            'price' => 180000,
            'price_round_trip' => 360000,
            'is_active' => true,
        ]);

        $this->actingAs($this->admin())->post('/admin/bookings', [
            'customer_name' => 'Budi',
            'phone' => '081200000000',
            'travel_route_id' => $route->id,
            'trip_type' => 'pp',
            'travel_date' => now()->addDay()->toDateString(),
            'pax' => 2,
            'status' => 'confirmed',
        ])->assertRedirect();

        $booking = Booking::firstWhere('customer_name', 'Budi');
        $this->assertNotNull($booking);
        $this->assertSame(720000, $booking->total_price);
        $this->assertStringStartsWith('SM88-', $booking->code);

        $this->actingAs($this->admin())->patch("/admin/bookings/{$booking->id}", ['status' => 'done'])->assertRedirect();
        $this->assertSame('done', $booking->refresh()->status);

        $this->actingAs($this->admin())->delete("/admin/bookings/{$booking->id}")->assertRedirect();
        $this->assertNull(Booking::find($booking->id));
    }
}
