<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login · {{ config('app.name') }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-200">
    <form method="POST" action="{{ route('login.attempt') }}" class="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
        @csrf
        <h1 class="text-xl font-bold text-amber-400">SM88 Trans</h1>
        <p class="mb-6 text-sm text-zinc-500">Admin Panel Login</p>

        @if ($errors->any())
            <div class="mb-4 rounded-lg border border-red-700/50 bg-red-500/10 px-3 py-2 text-sm text-red-300">{{ $errors->first() }}</div>
        @endif

        <label class="mb-1 block text-xs text-zinc-400">Email</label>
        <input type="email" name="email" value="{{ old('email') }}" required autofocus class="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400">

        <label class="mb-1 block text-xs text-zinc-400">Password</label>
        <input type="password" name="password" required class="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-amber-400">

        <label class="mb-5 flex items-center gap-2 text-xs text-zinc-400"><input type="checkbox" name="remember" value="1" class="accent-amber-400"> Ingat saya</label>

        <button class="w-full rounded-lg bg-amber-400 py-2.5 font-semibold text-black hover:brightness-110">Masuk</button>
    </form>
</body>
</html>
