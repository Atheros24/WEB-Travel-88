<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return ['travel_date' => 'date'];
    }

    public function route(): BelongsTo
    {
        return $this->belongsTo(TravelRoute::class, 'travel_route_id');
    }

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class);
    }

    public static function generateCode(): string
    {
        return 'SM88-'.now()->format('ymd').'-'.strtoupper(bin2hex(random_bytes(3)));
    }
}
