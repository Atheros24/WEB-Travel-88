@extends('layouts.admin')
@section('title', 'Armada')
@section('content')
<details class="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
    <summary class="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-400">+ Tambah Armada</summary>
    <form method="POST" action="{{ route('admin.vehicles.store') }}" enctype="multipart/form-data" class="grid gap-3 p-4 sm:grid-cols-3">
        @csrf
        @include('admin.vehicles.fields', ['vehicle' => new App\Models\Vehicle(['pax' => 7, 'is_active' => true])])
        <div class="sm:col-span-3"><button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Simpan</button></div>
    </form>
</details>

<div class="overflow-x-auto rounded-xl border border-zinc-800">
    <table class="w-full text-sm">
        <thead class="bg-zinc-900 text-left text-xs uppercase text-zinc-500">
        <tr><th class="px-3 py-2">Nama</th><th class="px-3 py-2">Kelas</th><th class="px-3 py-2">Pax</th><th class="px-3 py-2">Harga/Hari</th><th class="px-3 py-2">Aktif</th><th class="px-3 py-2"></th></tr>
        </thead>
        <tbody class="divide-y divide-zinc-800">
        @foreach ($vehicles as $vehicle)
            <tr>
                <td colspan="6" class="p-0">
                    <details>
                        <summary class="grid cursor-pointer grid-cols-6 items-center px-3 py-2 hover:bg-zinc-900/40">
                            <span>{{ $vehicle->name }}</span>
                            <span>{{ $vehicle->class }}</span>
                            <span>{{ $vehicle->pax }}</span>
                            <span>{{ $vehicle->price_per_day ? 'Rp '.number_format($vehicle->price_per_day, 0, ',', '.') : '-' }}</span>
                            <span>{{ $vehicle->is_active ? 'Ya' : 'Tidak' }}</span>
                            <span></span>
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
