@php($field = 'w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400')
@php($img = $vehicle->image)
<label class="text-xs text-zinc-400">Nama Unit<input name="name" value="{{ old('name', $vehicle->name) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Kelas<input name="class" value="{{ old('class', $vehicle->class) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Kapasitas (pax)<input type="number" name="pax" value="{{ old('pax', $vehicle->pax) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Status Ketersediaan
    <select name="status" class="{{ $field }} mt-1">
        @foreach (\App\Models\Vehicle::STATUSES as $value => $label)
            <option value="{{ $value }}" @selected(old('status', $vehicle->status ?? 'available') === $value)>{{ $label }}</option>
        @endforeach
    </select>
</label>
<label class="text-xs text-zinc-400">Harga / Hari (Rp)<input type="number" name="price_per_day" value="{{ old('price_per_day', $vehicle->price_per_day) }}" class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400 sm:col-span-2">
    Upload Gambar (jpg/png/webp, max 4MB)
    <input type="file" name="image_file" accept="image/jpeg,image/png,image/webp" class="{{ $field }} mt-1 file:mr-3 file:rounded file:border-0 file:bg-amber-400 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-black">
</label>
<label class="text-xs text-zinc-400">atau Path Gambar<input name="image" value="{{ old('image', $vehicle->image) }}" placeholder="/mobil/hiace-premio.jpg" class="{{ $field }} mt-1"></label>
@if ($img)
    <div class="flex items-center gap-3 sm:col-span-3">
        <img src="{{ $img }}" alt="{{ $vehicle->name }}" class="h-16 w-24 rounded-lg border border-zinc-700 bg-zinc-900 object-contain p-1">
        <label class="flex items-center gap-2 text-xs text-zinc-400">
            <input type="checkbox" name="remove_image" value="1" class="accent-red-500"> Hapus gambar
        </label>
        <span class="truncate text-xs text-zinc-600">{{ $img }}</span>
    </div>
@endif
<label class="flex items-center gap-2 text-sm text-zinc-300">
    <input type="checkbox" name="is_active" value="1" @checked(old('is_active', $vehicle->is_active)) class="accent-amber-400"> Unit aktif
</label>
