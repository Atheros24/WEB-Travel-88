<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use App\Models\TravelRoute;
use App\Models\Vehicle;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@sm88trans.id'],
            ['name' => 'Admin SM88', 'role' => 'admin', 'password' => Hash::make('password')]
        );

        foreach ([
            ['slug' => 'situbondo-surabaya', 'destination' => 'Surabaya', 'price' => 180000, 'price_round_trip' => 360000, 'duration' => '5-6 jam', 'badge' => 'Terlaris'],
            ['slug' => 'situbondo-malang', 'destination' => 'Malang', 'price' => 180000, 'price_round_trip' => 360000, 'duration' => '6-7 jam', 'badge' => null],
            ['slug' => 'situbondo-jember', 'destination' => 'Jember', 'price' => 100000, 'price_round_trip' => 200000, 'duration' => '3 jam', 'badge' => 'BARU'],
        ] as $r) {
            TravelRoute::updateOrCreate(['slug' => $r['slug']], $r);
        }

        foreach ([
            ['slug' => 'mercy-c300-amg', 'name' => 'Mercedes-Benz C300 AMG', 'class' => 'Premium', 'pax' => 4, 'status' => 'available'],
            ['slug' => 'hiace-premio', 'name' => 'Toyota Hiace Premio', 'class' => 'Premium Van', 'pax' => 14, 'status' => 'available'],
            ['slug' => 'hiace-commuter', 'name' => 'Toyota Hiace Commuter', 'class' => 'Van', 'pax' => 15, 'status' => 'available'],
            ['slug' => 'elf-long-giga', 'name' => 'Isuzu Elf Long Giga', 'class' => 'Bus Mini', 'pax' => 20, 'status' => 'available'],
            ['slug' => 'innova-venturer', 'name' => 'Toyota Innova Venturer', 'class' => 'MPV Premium', 'pax' => 7, 'status' => 'available'],
            ['slug' => 'innova-reborn', 'name' => 'Toyota Innova Reborn', 'class' => 'MPV', 'pax' => 7, 'status' => 'available'],
        ] as $v) {
            Vehicle::updateOrCreate(['slug' => $v['slug']], $v);
        }

        foreach ([
            ['name' => 'Budi', 'role' => 'Penumpang Surabaya', 'text' => 'Travelnya tepat waktu, harga jelas, no biaya tersembunyi.', 'rating' => 5],
            ['name' => 'Siti', 'role' => 'Wisatawan Bali', 'text' => 'Awalnya ragu booking online, ternyata lancar sampai e-ticket.', 'rating' => 5],
            ['name' => 'Hendra', 'role' => 'Rombongan ziarah', 'text' => 'Hiace untuk ziarah rombongan sangat puas.', 'rating' => 5],
        ] as $t) {
            Testimonial::updateOrCreate(['name' => $t['name']], $t);
        }
    }
}
