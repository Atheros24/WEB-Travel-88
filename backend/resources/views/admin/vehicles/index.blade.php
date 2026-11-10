@extends('layouts.admin')
@section('title', 'Armada')
@section('content')
@php($badge = [
    'available' => 'bg-emerald-500/15 text-emerald-300 border-emerald-700/50',
    'full' => 'bg-red-500/15 text-red-300 border-red-700/50',
    'maintenance' => 'bg-amber-500/15 text-amber-300 border-amber-700/50',
])

<div class="mb-4 grid gap-3 sm:grid-cols-4">
    @foreach (\App\Models\Vehicle::STATUSES as $value => $label)
        <div class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
            <div class="text-xs uppercase tracking-wide text-zinc-500">{{ $label }}</div>
            <div class="mt-1 text-2xl font-bold {{ $value === 'available' ? 'text-emerald-400' : ($value === 'full' ? 'text-red-400' : 'text-amber-400') }}">{{ $counts[$value] ?? 0 }}</div>
        </div>
    @endforeach
    <div class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
        <div class="text-xs uppercase tracking-wide text-zinc-500">Total Unit</div>
        <div class="mt-1 text-2xl font-bold">{{ array_sum($counts) }}</div>
    </div>
</div>

<details class="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
    <summary class="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-400">+ Tambah Armada</summary>
    <form method="POST" action="{{ route('admin.vehicles.store') }}" enctype="multipart/form-data" class="grid gap-3 p-4 sm:grid-cols-3">
        @csrf
        @include('admin.vehicles.fields', ['vehicle' => new App\Models\Vehicle(['pax' => 7, 'is_active' => true, 'status' => 'available'])])
        <div class="sm:col-span-3"><button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Simpan</button></div>
    </form>
</details>

<div class="overflow-x-auto rounded-xl border border-zinc-800">
    <table class="w-full text-sm">
        <thead class="bg-zinc-900 text-left text-xs uppercase text-zinc-500">
        <tr><th class="px-3 py-2">Nama</th><th class="px-3 py-2">Kelas</th><th class="px-3 py-2">Pax</th><th class="px-3 py-2">Status</th><th class="px-3 py-2">Harga/Hari</th><th class="px-3 py-2">Aktif</th><th class="px-3 py-2"></th></tr>
        </thead>
        <tbody class="divide-y divide-zinc-800">
        @foreach ($vehicles as $vehicle)
            <tr>
                <td colspan="7" class="p-0">
                    <details>
                        <summary class="grid cursor-pointer grid-cols-7 items-center gap-2 px-3 py-2 hover:bg-zinc-900/40">
                            <span>{{ $vehicle->name }}</span>
                            <span>{{ $vehicle->class }}</span>
                            <span>{{ $vehicle->pax }}</span>
                            <span>
                                <form method="POST" action="{{ route('admin.vehicles.status', $vehicle) }}" onsubmit="event.stopPropagation()">
                                    @csrf @method('PATCH')
                                    <select name="status" onchange="this.form.submit()" onclick="event.stopPropagation()" class="rounded border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs">
                                        @foreach (\App\Models\Vehicle::STATUSES as $value => $label)
                                            <option value="{{ $value }}" @selected($vehicle->status === $value)>{{ $label }}</option>
                                        @endforeach
                                    </select>
                                </form>
                            </span>
                            <span>{{ $vehicle->price_per_day ? 'Rp '.number_format($vehicle->price_per_day, 0, ',', '.') : '-' }}</span>
                            <span>{{ $vehicle->is_active ? 'Ya' : 'Tidak' }}</span>
                            <span class="text-right"><span class="rounded border px-2 py-0.5 text-xs {{ $badge[$vehicle->status] ?? $badge['available'] }}">{{ $vehicle->statusLabel() }}</span></span>
                        </summary>
                        <form method="POST" action="{{ route('admin.vehicles.update', $vehicle) }}" enctype="multipart/form-data" class="grid gap-3 border-t border-zinc-800 bg-zinc-900/20 p-4 sm:grid-cols-3">
                            @csrf @method('PUT')
                            @include('admin.vehicles.fields', ['vehicle' => $vehicle])
                            <div class="flex gap-2 sm:col-span-3">
                                <button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Update</button>
                                <button form="del-vehicle-{{ $vehicle->id }}" class="rounded-lg border border-red-700 px-4 py-2 text-sm text-red-400">Hapus</button>
                            </div>
                        </form>
                        <form id="del-vehicle-{{ $vehicle->id }}" method="POST" action="{{ route('admin.vehicles.destroy', $vehicle) }}" onsubmit="return confirm('Hapus armada?')">@csrf @method('DELETE')</form>
                    </details>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
<div class="mt-4">{{ $vehicles->links() }}</div>
@endsection
