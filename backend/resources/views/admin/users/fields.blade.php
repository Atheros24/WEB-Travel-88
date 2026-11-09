@php($field = 'w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400')
<label class="text-xs text-zinc-400">Nama<input name="name" value="{{ old('name', $user->name) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Email<input type="email" name="email" value="{{ old('email', $user->email) }}" required class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">No. HP<input name="phone" value="{{ old('phone', $user->phone) }}" class="{{ $field }} mt-1"></label>
<label class="text-xs text-zinc-400">Role
    <select name="role" class="{{ $field }} mt-1">
        @foreach (['admin', 'staff'] as $r)
            <option value="{{ $r }}" @selected(old('role', $user->role) === $r)>{{ $r }}</option>
        @endforeach
    </select>
</label>
<label class="text-xs text-zinc-400">Password {{ $user->exists ? '(kosongkan jika tetap)' : '' }}
    <input type="password" name="password" {{ $user->exists ? '' : 'required' }} class="{{ $field }} mt-1">
</label>
