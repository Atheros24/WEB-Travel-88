@extends('layouts.admin')
@section('title', 'Rute')
@section('content')
<details class="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
    <summary class="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-400">+ Tambah Rute</summary>
    <form method="POST" action="{{ route('admin.routes.store') }}" class="grid gap-3 p-4 sm:grid-cols-3">
        @csrf
        @include('admin.routes.fields', ['route' => new App\Models\TravelRoute(['origin' => 'Situbondo', 'is_active' => true])])
        <div class="sm:col-span-3"><button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Simpan</button></div>
    </form>
</details>

<div class="overflow-x-auto rounded-xl border border-zinc-800">
    <table class="w-full text-sm">
        <thead class="bg-zinc-900 text-left text-xs uppercase text-zinc-500">
        <tr><th class="px-3 py-2">Rute</th><th class="px-3 py-2">Harga</th><th class="px-3 py-2">PP</th><th class="px-3 py-2">Durasi</th><th class="px-3 py-2">Badge</th><th class="px-3 py-2">Aktif</th><th class="px-3 py-2"></th></tr>
        </thead>
        <tbody class="divide-y divide-zinc-800">
        @foreach ($routes as $route)
            <tr>
                <td colspan="7" class="p-0">
                    <details>
                        <summary class="grid cursor-pointer grid-cols-6 items-center px-3 py-2 hover:bg-zinc-900/40">
                            <span class="col-span-1">{{ $route->origin }} → {{ $route->destination }}</span>
                            <span>Rp {{ number_format($route->price, 0, ',', '.') }}</span>
                            <span>Rp {{ number_format($route->price_round_trip, 0, ',', '.') }}</span>
                            <span>{{ $route->duration }}</span>
                            <span>{{ $route->badge }}</span>
                            <span>{{ $route->is_active ? 'Ya' : 'Tidak' }}</span>
                            <span></span>
                        </summary>
                        <form method="POST" action="{{ route('admin.routes.update', $route) }}" class="grid gap-3 border-t border-zinc-800 bg-zinc-900/20 p-4 sm:grid-cols-3">
                            @csrf @method('PUT')
                            @include('admin.routes.fields', ['route' => $route])
                            <div class="flex gap-2 sm:col-span-3">
                                <button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Update</button>
                                <button form="del-route-{{ $route->id }}" class="rounded-lg border border-red-700 px-4 py-2 text-sm text-red-400">Hapus</button>
                            </div>
                        </form>
                        <form id="del-route-{{ $route->id }}" method="POST" action="{{ route('admin.routes.destroy', $route) }}" onsubmit="return confirm('Hapus rute?')">@csrf @method('DELETE')</form>
                    </details>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
<div class="mt-4">{{ $routes->links() }}</div>
@endsection
