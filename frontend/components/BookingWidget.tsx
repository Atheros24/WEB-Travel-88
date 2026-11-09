"use client";

import { useEffect, useMemo, useState } from "react";
import { IconWhatsapp, IconSwap, IconPlus, IconMinus } from "@/components/Icons";
import { createBooking, getRoutes, type ApiRoute } from "@/lib/api";

const FALLBACK_ROUTES = [
  { id: 1, destination: "Surabaya", price: 180000 },
  { id: 2, destination: "Malang", price: 180000 },
  { id: 3, destination: "Jember", price: 100000 },
];

const WA_TRAVEL = "6281226688882";
const rp = (n: number) => "Rp " + n.toLocaleString("id-ID");

export default function BookingWidget() {
  const [routes, setRoutes] = useState<ApiRoute[] | null>(null);
  const [routeId, setRouteId] = useState<number>(FALLBACK_ROUTES[0].id);
  const [dir, setDir] = useState<"out" | "in">("out");
  const [trip, setTrip] = useState<"single" | "pp">("single");
  const [pax, setPax] = useState(1);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    getRoutes()
      .then((r) => {
        if (r.length) {
          setRoutes(r);
          setRouteId((id) => (r.some((x) => x.id === id) ? id : r[0].id));
        }
      })
      .catch(() => setStatus({ type: "err", msg: "Rute offline, pakai data lokal." }));
  }, []);

  const list = routes ?? FALLBACK_ROUTES;
  const route = list.find((r) => r.id === routeId) ?? list[0];
  const label = route.destination;
  const total = route.price * pax * (trip === "pp" ? 2 : 1);

  const waUrl = useMemo(
    () =>
      `https://wa.me/${WA_TRAVEL}?text=${encodeURIComponent(
        `Halo SM88 Trans, saya mau pesan travel.\n` +
          `Rute: Situbondo ${dir === "out" ? "→" : "←"} ${label}\n` +
          `Tipe: ${trip === "pp" ? "Pulang Pergi" : "Sekali Jalan"}\n` +
          `Tanggal: ${date || "-"}\n` +
          `Pax: ${pax}\n` +
          `Estimasi: ${rp(total)}`
      )}`,
    [label, dir, trip, date, pax, total]
  );

  async function submit() {
    if (!date) return setStatus({ type: "err", msg: "Isi tanggal berangkat." });
    if (!name.trim() || !phone.trim()) return setStatus({ type: "err", msg: "Isi nama & nomor HP." });
    setBusy(true);
    setStatus(null);
    try {
      const res = await createBooking({
        customer_name: name.trim(),
        phone: phone.trim(),
        travel_route_id: route.id,
        trip_type: trip,
        travel_date: date,
        pax,
      });
      setStatus({ type: "ok", msg: `Booking ${res.code} tersimpan (${rp(res.total_price)}).` });
      window.location.href = waUrl; // same-tab → not blocked by popup blocker
    } catch (e) {
      const msg = e instanceof Error && e.message !== "booking 422" ? e.message : "Cek kembali data pesanan.";
      setStatus({ type: "err", msg: `Gagal simpan booking: ${msg}` });
    } finally {
      setBusy(false);
    }
  }

  const origin = dir === "out" ? "Situbondo" : label;
  const dest = dir === "out" ? label : "Situbondo";

  return (
    <div className="group relative rounded-2xl border border-gold/30 bg-black/70 p-4 shadow-[0_20px_60px_-20px_rgba(201,162,39,0.45)] backdrop-blur-xl sm:p-6">
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-gold/30 via-transparent to-sea/30 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Pesan Tiket</p>
          <h3 className="font-display text-xl font-bold text-white">Travel Reguler</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Kursi tersedia
        </span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-white/5 p-1">
        {(["single", "pp"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTrip(t)}
            className={`rounded-lg py-2 text-sm font-semibold transition-all duration-300 ${
              trip === t
                ? "bg-gold text-black shadow-lg shadow-gold/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {t === "single" ? "Sekali Jalan" : "Pulang Pergi ×2"}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-wider text-gray-500">Dari</p>
          <p className="truncate text-sm font-semibold text-white">{origin}</p>
        </div>
        <button
          type="button"
          onClick={() => setDir((d) => (d === "out" ? "in" : "out"))}
          aria-label="Tukar arah"
          className="shrink-0 rounded-full border border-gold/40 p-2 text-gold transition hover:rotate-180 hover:bg-gold hover:text-black"
        >
          <IconSwap width={16} height={16} />
        </button>
        <div className="min-w-0 flex-1 text-right">
          <p className="text-[10px] uppercase tracking-wider text-gray-500">Ke</p>
          <p className="truncate text-sm font-semibold text-white">{dest}</p>
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        {list.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRouteId(r.id)}
            className={`flex-1 rounded-lg border px-2 py-2 text-xs font-medium transition-all duration-300 ${
              routeId === r.id
                ? "border-gold bg-gold/15 text-gold"
                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {r.destination}
            <span className="mt-0.5 block text-[10px] opacity-70">{rp(r.price)}</span>
          </button>
        ))}
      </div>

      <div className="mb-3 grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1 text-[11px] text-gray-400">
          Nama
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama pemesan"
            className="rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
        <label className="flex flex-col gap-1 text-[11px] text-gray-400">
          No. HP
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08xx"
            inputMode="tel"
            className="rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1 text-[11px] text-gray-400">
          Tanggal
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>
        <div className="flex flex-col gap-1 text-[11px] text-gray-400">
          Penumpang
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-ink px-1">
            <button type="button" onClick={() => setPax((p) => Math.max(1, p - 1))} className="flex h-9 w-8 items-center justify-center text-gold transition hover:scale-125"><IconMinus width={16} height={16} /></button>
            <span className="text-sm font-semibold text-white">{pax}</span>
            <button type="button" onClick={() => setPax((p) => Math.min(40, p + 1))} className="flex h-9 w-8 items-center justify-center text-gold transition hover:scale-125"><IconPlus width={16} height={16} /></button>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-gold/10 to-transparent px-3 py-3">
        <div>
          <p className="text-[11px] text-gray-400">
            {trip === "pp" ? `${rp(route.price)} × ${pax} × 2` : `${rp(route.price)} × ${pax}`}
          </p>
          <p className="text-xs text-gray-500">Termasuk tol, bagasi, door-to-door</p>
        </div>
        <p className="font-display text-2xl font-bold text-gradient-gold">{rp(total)}</p>
      </div>

      {status && (
        <p className={`mb-3 text-xs ${status.type === "ok" ? "text-emerald-400" : "text-red-400"}`}>{status.msg}</p>
      )}

      <button
        type="button"
        onClick={submit}
        disabled={busy}
        className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gold px-6 py-3.5 font-semibold text-black transition hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 hover:translate-x-full" />
        <IconWhatsapp width={18} height={18} />
        {busy ? "Memproses..." : "Pesan Sekarang"}
      </button>
    </div>
  );
}
