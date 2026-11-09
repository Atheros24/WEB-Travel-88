@php($field = 'w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400')
<label class="text-xs text-zinc-400">Nama<input name="name" value="{{ old('name', $testimonial->name) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Keterangan<input name="role" value="{{ old('role', $testimonial->role) }}" class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Rating<input type="number" name="rating" min="1" max="5" value="{{ old('rating', $testimonial->rating) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400 sm:col-span-2">Isi Testimoni<textarea name="text" rows="3" required class="{{ $field }} mt-1">{{ old('text', $testimonial->text) }}</textarea></label>
<label class="flex items-center gap-2 text-sm text-zinc-300">
    <input type="checkbox" name="is_published" value="1" @checked(old('is_published', $testimonial->is_published)) class="accent-amber-400"> Tampilkan
</label>
