@php($field = 'w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400')
<label class="text-xs text-zinc-400">Asal<input name="origin" value="{{ old('origin', $route->origin) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Tujuan<input name="destination" value="{{ old('destination', $route->destination) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Durasi<input name="duration" value="{{ old('duration', $route->duration) }}" class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Harga (Rp)<input type="number" name="price" value="{{ old('price', $route->price ?? 0) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Harga Pulang-Pergi (Rp)<input type="number" name="price_round_trip" value="{{ old('price_round_trip', $route->price_round_trip ?? 0) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Badge<input name="badge" value="{{ old('badge', $route->badge) }}" class="{{ $field }} mt-1"></label>
<label class="flex items-center gap-2 text-sm text-zinc-300 sm:col-span-3">
    <input type="checkbox" name="is_active" value="1" @checked(old('is_active', $route->is_active)) class="accent-amber-400"> Rute aktif
</label>
