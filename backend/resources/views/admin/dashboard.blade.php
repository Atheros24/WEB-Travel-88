@extends('layouts.admin')
@section('title', 'Dashboard')
@section('content')
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        @foreach ([
            ['Booking', $stats['bookings'], 'text-amber-400'],
            ['Pending', $stats['bookingsPending'], 'text-yellow-400'],
            ['Confirmed', $stats['bookingsConfirmed'], 'text-emerald-400'],
            ['Pendapatan', 'Rp '.number_format($stats['revenue'], 0, ',', '.'), 'text-white'],
        ] as [$label, $value, $class])
            <div class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                <div class="text-xs uppercase tracking-wide text-zinc-500">{{ $label }}</div>
                <div class="mt-1 text-2xl font-bold {{ $class }}">{{ $value }}</div>
            </div>
        @endforeach
    </div>

    <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        @foreach ([['User', $stats['users']], ['Rute', $stats['routes']], ['Armada', $stats['vehicles']], ['Testimoni', $stats['testimonials']]] as [$label, $value])
            <div class="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-sm">
                <span class="text-zinc-500">{{ $label }}</span><span class="float-right font-semibold">{{ $value }}</span>
            </div>
        @endforeach
    </div>

    <h2 class="mb-3 mt-8 font-semibold">Booking Terbaru</h2>
    <div class="overflow-x-auto rounded-xl border border-zinc-800">
        <table class="w-full text-sm">
            <thead class="bg-zinc-900 text-left text-xs uppercase text-zinc-500">
            <tr><th class="px-3 py-2">Kode</th><th class="px-3 py-2">Pelanggan</th><th class="px-3 py-2">Rute</th><th class="px-3 py-2">Tanggal</th><th class="px-3 py-2">Total</th><th class="px-3 py-2">Status</th></tr>
            </thead>
            <tbody class="divide-y divide-zinc-800">
            @forelse ($recentBookings as $b)
                <tr class="hover:bg-zinc-900/40">
                    <td class="px-3 py-2 font-mono text-xs">{{ $b->code }}</td>
                    <td class="px-3 py-2">{{ $b->customer_name }}</td>
                    <td class="px-3 py-2">{{ $b->route?->destination ?? '-' }}</td>
                    <td class="px-3 py-2">{{ $b->travel_date?->format('d/m/Y') }}</td>
                    <td class="px-3 py-2">Rp {{ number_format($b->total_price, 0, ',', '.') }}</td>
                    <td class="px-3 py-2"><span class="rounded bg-zinc-800 px-2 py-0.5 text-xs">{{ $b->status }}</span></td>
                </tr>
            @empty
                <tr><td colspan="6" class="px-3 py-6 text-center text-zinc-600">Belum ada booking.</td></tr>
            @endforelse
            </tbody>
        </table>
    </div>
@endsection
