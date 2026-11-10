<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicle extends Model
{
    protected $guarded = [];

    // ponytail: manual status, not derived from bookings — no seat-inventory table yet.
    public const STATUSES = [
        'available' => 'Tersedia',
        'full' => 'Penuh',
        'maintenance' => 'Perawatan',
    ];

    protected function casts(): array
    {
        return ['is_active' => 'boolean'];
    }

    public function statusLabel(): string
    {
        return self::STATUSES[$this->status] ?? 'Tersedia';
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
