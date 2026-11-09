<!DOCTYPE html>
<html lang="id" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Admin') · {{ config('app.name') }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-full bg-zinc-950 text-zinc-200 antialiased">
<div class="flex min-h-full">
    <aside class="hidden w-60 shrink-0 border-r border-zinc-800 bg-zinc-900/60 md:block">
        <div class="border-b border-zinc-800 px-5 py-4">
            <div class="font-bold tracking-tight text-amber-400">SM88 Trans</div>
            <div class="text-xs text-zinc-500">Admin Panel</div>
        </div>
        <nav class="space-y-1 p-3 text-sm">
            @foreach ([
                ['admin.dashboard', 'Dashboard'],
                ['admin.bookings.index', 'Booking'],
                ['admin.routes.index', 'Rute'],
                ['admin.vehicles.index', 'Armada'],
                ['admin.testimonials.index', 'Testimoni'],
                ['admin.users.index', 'User'],
            ] as [$name, $label])
                <a href="{{ route($name) }}" class="block rounded-lg px-3 py-2 transition {{ request()->routeIs($name) ? 'bg-amber-400 font-semibold text-black' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white' }}">{{ $label }}</a>
            @endforeach
        </nav>
    </aside>
    <div class="flex min-w-0 flex-1 flex-col">
        <header class="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
            <div class="font-semibold">@yield('title', 'Dashboard')</div>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button class="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-amber-400 hover:text-amber-400">{{ auth()->user()->name }} · Logout</button>
            </form>
        </header>
        <main class="flex-1 p-5">
            @if (session('ok'))
                <div class="mb-4 rounded-lg border border-emerald-700/50 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">{{ session('ok') }}</div>
            @endif
            @if (session('err'))
                <div class="mb-4 rounded-lg border border-red-700/50 bg-red-500/10 px-4 py-2 text-sm text-red-300">{{ session('err') }}</div>
            @endif
            @yield('content')
        </main>
    </div>
</div>
</body>
</html>
