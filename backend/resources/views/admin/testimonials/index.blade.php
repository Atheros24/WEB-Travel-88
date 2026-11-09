@extends('layouts.admin')
@section('title', 'Testimoni')
@section('content')
<details class="mb-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
    <summary class="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-400">+ Tambah Testimoni</summary>
    <form method="POST" action="{{ route('admin.testimonials.store') }}" class="grid gap-3 p-4 sm:grid-cols-3">
        @csrf
        @include('admin.testimonials.fields', ['testimonial' => new App\Models\Testimonial(['rating' => 5, 'is_published' => true])])
        <div class="sm:col-span-3"><button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Simpan</button></div>
    </form>
</details>

<div class="space-y-3">
    @foreach ($testimonials as $testimonial)
        <details class="rounded-xl border border-zinc-800 bg-zinc-900/30">
            <summary class="flex cursor-pointer items-center justify-between px-4 py-3 text-sm">
                <span>{{ $testimonial->name }} <span class="text-zinc-500">· {{ $testimonial->role }}</span></span>
                <span class="text-amber-400">{{ str_repeat('★', $testimonial->rating) }}</span>
            </summary>
            <form method="POST" action="{{ route('admin.testimonials.update', $testimonial) }}" class="grid gap-3 border-t border-zinc-800 p-4 sm:grid-cols-3">
                @csrf @method('PUT')
                @include('admin.testimonials.fields', ['testimonial' => $testimonial])
                <div class="flex gap-2 sm:col-span-3">
                    <button class="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-black">Update</button>
                    <button form="del-testi-{{ $testimonial->id }}" class="rounded-lg border border-red-700 px-4 py-2 text-sm text-red-400">Hapus</button>
                </div>
            </form>
            <form id="del-testi-{{ $testimonial->id }}" method="POST" action="{{ route('admin.testimonials.destroy', $testimonial) }}" onsubmit="return confirm('Hapus testimoni?')">@csrf @method('DELETE')</form>
        </details>
    @endforeach
</div>
<div class="mt-4">{{ $testimonials->links() }}</div>
@endsection
