@extends('layouts.admin')
@section('title', 'User')
@section('content')
<details class="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
    <summary class="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-400">+ Tambah User</summary>
    <form method="POST" action="{{ route('admin.users.store') }}" class="grid gap-3 p-4 sm:grid-cols-3">
        @csrf
        @include('admin.users.fields', ['user' => new App\Models\User(['role' => 'staff'])])
        <div class="sm:col-span-3"><button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Simpan</button></div>
    </form>
</details>

<div class="overflow-x-auto rounded-xl border border-zinc-800">
    <table class="w-full text-sm">
        <thead class="bg-zinc-900 text-left text-xs uppercase text-zinc-500">
        <tr><th class="px-3 py-2">Nama</th><th class="px-3 py-2">Email</th><th class="px-3 py-2">HP</th><th class="px-3 py-2">Role</th><th class="px-3 py-2">Dibuat</th><th class="px-3 py-2"></th></tr>
        </thead>
        <tbody class="divide-y divide-zinc-800">
        @foreach ($users as $user)
            <tr>
                <td colspan="6" class="p-0">
                    <details>
                        <summary class="grid cursor-pointer grid-cols-6 items-center px-3 py-2 hover:bg-zinc-900/40">
                            <span>{{ $user->name }}</span>
                            <span>{{ $user->email }}</span>
                            <span>{{ $user->phone ?? '-' }}</span>
                            <span><span class="rounded bg-zinc-800 px-2 py-0.5 text-xs">{{ $user->role }}</span></span>
                            <span>{{ $user->created_at->format('d/m/Y') }}</span>
                            <span></span>
                        </summary>
                        <form method="POST" action="{{ route('admin.users.update', $user) }}" class="grid gap-3 border-t border-zinc-800 bg-zinc-900/20 p-4 sm:grid-cols-3">
                            @csrf @method('PUT')
                            @include('admin.users.fields', ['user' => $user])
                            <div class="flex gap-2 sm:col-span-3">
                                <button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Update</button>
                                <button form="del-user-{{ $user->id }}" class="rounded-lg border border-red-700 px-4 py-2 text-sm text-red-400">Hapus</button>
                            </div>
                        </form>
                        <form id="del-user-{{ $user->id }}" method="POST" action="{{ route('admin.users.destroy', $user) }}" onsubmit="return confirm('Hapus user?')">@csrf @method('DELETE')</form>
                    </details>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
<div class="mt-4">{{ $users->links() }}</div>
@endsection
