@extends('layouts.admin')
@section('title', 'Booking')
@section('content')
<details class="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
    <summary class="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-400">+ Tambah Booking</summary>
    @php($field = 'w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400')
    <form method="POST" action="{{ route('admin.bookings.store') }}" class="grid gap-3 p-4 sm:grid-cols-3">
        @csrf
        <label class="text-xs text-zinc-400">Nama Pelanggan<input name="customer_name" value="{{ old('customer_name') }}" required class="{{ $field }} mt-1"></label>
        <label class="text-xs text-zinc-400">No. HP<input name="phone" value="{{ old('phone') }}" required class="{{ $field }} mt-1"></label>
        <label class="text-xs text-zinc-400">Rute
            <select name="travel_route_id" class="{{ $field }} mt-1">
                <option value="">- pilih rute -</option>
                @foreach ($routes as $r)
                    <option value="{{ $r->id }}" @selected(old('travel_route_id') == $r->id)>{{ $r->origin }} → {{ $r->destination }} (Rp {{ number_format($r->price, 0, ',', '.') }})</option>
                @endforeach
            </select>
        </label>
        <label class="text-xs text-zinc-400">Armada (opsional)
            <select name="vehicle_id" class="{{ $field }} mt-1">
                <option value="">- pilih unit -</option>
                @foreach ($vehicles as $v)
                    <option value="{{ $v->id }}" @selected(old('vehicle_id') == $v->id)>{{ $v->name }} ({{ $v->pax }} pax)</option>
                @endforeach
            </select>
        </label>
        <label class="text-xs text-zinc-400">Tipe
            <select name="trip_type" class="{{ $field }} mt-1">
                <option value="single" @selected(old('trip_type') === 'single')>Sekali Jalan</option>
                <option value="pp" @selected(old('trip_type') === 'pp')>Pulang Pergi</option>
            </select>
        </label>
        <label class="text-xs text-zinc-400">Tanggal<input type="date" name="travel_date" value="{{ old('travel_date', now()->toDateString()) }}" required class="{{ $field }} mt-1"></label>
        <label class="text-xs text-zinc-400">Pax<input type="number" name="pax" value="{{ old('pax', 1) }}" min="1" max="99" required class="{{ $field }} mt-1"></label>
        <label class="text-xs text-zinc-400">Status
            <select name="status" class="{{ $field }} mt-1">
                @foreach (['pending', 'confirmed', 'onboard', 'done', 'cancelled'] as $s)
                    <option value="{{ $s }}" @selected(old('status') === $s)>{{ $s }}</option>
                @endforeach
            </select>
        </label>
        <label class="text-xs text-zinc-400 sm:col-span-3">Catatan<textarea name="notes" rows="2" class="{{ $field }} mt-1">{{ old('notes') }}</textarea></label>
        <div class="sm:col-span-3"><button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Simpan</button></div>
    </form>
</details>
<form class="mb-4 flex flex-wrap gap-2">
<input name="q" value="{{ $q }}" placeholder="Cari kode / nama / hp" class="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400">
<select name="status" class="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm">
<option value="">Semua status</option>
@foreach (['pending', 'confirmed', 'onboard', 'done', 'cancelled'] as $s)
<option value="{{ $s }}" @selected($status === $s)>{{ $s }}</option>
@endforeach
</select>
<button class="rounded-lg bg-zinc-800 px-4 py-2 text-sm hover:bg-zinc-700">Filter</button>
</form>
<div class="overflow-x-auto rounded-xl border border-zinc-800">
<table class="w-full text-sm">
<thead class="bg-zinc-900 text-left text-xs uppercase text-zinc-500">
<tr><th class="px-3 py-2">Kode</th><th class="px-3 py-2">Pelanggan</th><th class="px-3 py-2">Rute / Unit</th><th class="px-3 py-2">Tanggal</th><th class="px-3 py-2">Pax</th><th class="px-3 py-2">Total</th><th class="px-3 py-2">Status</th><th class="px-3 py-2"></th></tr>
</thead>
<tbody class="divide-y divide-zinc-800">
@forelse ($bookings as $b)
<tr class="align-top hover:bg-zinc-900/40">
<td class="px-3 py-2 font-mono text-xs">{{ $b->code }}<div class="mt-1 text-[11px] text-zinc-600">{{ $b->created_at->format('d/m H:i') }}</div></td>
<td class="px-3 py-2">{{ $b->customer_name }}<div class="text-xs text-zinc-500">{{ $b->phone }}</div></td>
<td class="px-3 py-2">{{ $b->route?->label ?? $b->vehicle?->name ?? '-' }}<div class="text-xs text-zinc-500">{{ $b->trip_type === 'pp' ? 'Pulang pergi' : 'Sekali jalan' }}</div></td>
<td class="px-3 py-2">{{ $b->travel_date?->format('d/m/Y') }}</td>
<td class="px-3 py-2">{{ $b->pax }}</td>
<td class="px-3 py-2">Rp {{ number_format($b->total_price, 0, ',', '.') }}</td>
<td class="px-3 py-2">
<form method="POST" action="{{ route('admin.bookings.update', $b) }}">
@csrf @method('PATCH')
<select name="status" onchange="this.form.submit()" class="rounded border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs">
@foreach (['pending', 'confirmed', 'onboard', 'done', 'cancelled'] as $s)
<option value="{{ $s }}" @selected($b->status === $s)>{{ $s }}</option>
@endforeach
</select>
</form>
@if ($b->notes)<div class="mt-1 max-w-[16rem] text-[11px] text-zinc-500">{{ $b->notes }}</div>@endif
</td>
<td class="px-3 py-2">
<form method="POST" action="{{ route('admin.bookings.destroy', $b) }}" onsubmit="return confirm('Hapus booking {{ $b->code }}?')">
@csrf @method('DELETE')
<button class="rounded-lg border border-red-700 px-3 py-1 text-xs text-red-400 hover:bg-red-950">Hapus</button>
</form>
</td>
</tr>
@empty
<tr><td colspan="8" class="px-3 py-6 text-center text-zinc-600">Tidak ada data.</td></tr>
@endforelse
</tbody>
</table>
</div>
<div class="mt-4">{{ $bookings->links() }}</div>
@endsection
