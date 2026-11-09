import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IconArrowRight, IconClock } from "@/components/Icons";
import { getRoutes, type ApiRoute } from "@/lib/api";

const WA_TRAVEL = "6281226688882";
const rp = (n: number) => "Rp " + n.toLocaleString("id-ID");
const wa = (text: string) => `https://wa.me/${WA_TRAVEL}?text=${encodeURIComponent(text)}`;

// ponytail: kota image lives in /public/kota/<slug>.jpg; unknown kota -> gradient.
const KOTA_IMG: Record<string, string> = {
  surabaya: "/kota/surabaya.jpg",
  malang: "/kota/malang.jpg",
  jember: "/kota/jember.jpg",
};

const FALLBACK: ApiRoute[] = [
  { id: 1, origin: "Situbondo", destination: "Surabaya", price: 180000, price_round_trip: 360000, duration: "5-6 jam", badge: "Terlaris" },
  { id: 2, origin: "Situbondo", destination: "Malang", price: 180000, price_round_trip: 360000, duration: "6-7 jam", badge: null },
  { id: 3, origin: "Situbondo", destination: "Jember", price: 100000, price_round_trip: 200000, duration: "3 jam", badge: "BARU" },
];

async function loadRoutes(): Promise<ApiRoute[]> {
  try {
    const data = await getRoutes();
    return data.length ? data : FALLBACK;
  } catch {
    return FALLBACK; // ponytail: backend down → static list keeps section alive
  }
}

export async function RuteGrid() {
  const routes = await loadRoutes();
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {routes.map((r, i) => {
        const label = `${r.origin} ⇄ ${r.destination}`;
        const img = KOTA_IMG[r.destination.toLowerCase()];
        return (
          <Reveal key={r.id} delay={i * 130}>
            <a href={wa(`Halo SM88 Trans, saya mau pesan travel rute ${label} (${rp(r.price)}/pax).`)} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_25px_60px_-25px_rgba(201,162,39,0.5)]">
              <div className="relative h-44 overflow-hidden">
                {img ? (
                  <Image
                    src={img}
                    alt={`Kota ${r.destination}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-ink via-gray-800 to-ink" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                {r.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-black shadow-lg animate-glow">{r.badge}</span>
                )}
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
                  <IconClock width={13} height={13} className="text-gold" /> {r.duration ?? "-"}
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">{label}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-gradient-gold">{rp(r.price)}</span>
                  <span className="text-xs text-gray-500">/pax sekali jalan</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Pulang Pergi: {rp(r.price_round_trip)}</p>
                <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold">
                  Pesan Sekarang
                  <IconArrowRight width={16} height={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}

export async function FooterRoutes() {
  const routes = await loadRoutes();
  return (
    <ul className="mt-3 space-y-2">
      {routes.map((r) => {
        const label = `${r.origin} ⇄ ${r.destination}`;
        return (
          <li key={r.id}>
            <a href={wa(`Halo, saya mau pesan travel rute ${label}.`)} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">{label}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Rute() {
  return (
    <section id="rute" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Rute &amp; Tarif</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Travel Reguler Terjadwal</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Harga per orang, sekali jalan — sudah termasuk door-to-door, tol, dan bagasi.
          </p>
        </Reveal>
        <RuteGrid />
      </div>
    </section>
  );
}

export function RuteFallback() {
  return (
    <section id="rute" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-72 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </section>
  );
}
