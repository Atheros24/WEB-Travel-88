import Image from "next/image";
import Reveal from "@/components/Reveal";
import { IconArrowRight, IconLuggage, IconUsers } from "@/components/Icons";
import { getVehicles, type ApiVehicle } from "@/lib/api";

const WA_CARTER = "6287862187796";
const wa = (text: string) => `https://wa.me/${WA_CARTER}?text=${encodeURIComponent(text)}`;

// ponytail: images live in /public/mobil/<slug>.jpg; vehicles without a file get
// the generated gradient placeholder. Add the jpg to /public/mobil, no code change.
const LOCAL_IMG = new Set([
  "mercy-c300-amg", "hiace-premio", "hiace-commuter",
  "elf-long-giga", "innova-venturer", "innova-reborn",
]);

const FALLBACK: ApiVehicle[] = [
  { id: 1, slug: "mercy-c300-amg", name: "Mercedes-Benz C300 AMG", class: "Premium", pax: 4, status: "available", image: null },
  { id: 2, slug: "hiace-premio", name: "Toyota Hiace Premio", class: "Premium Van", pax: 14, status: "available", image: null },
  { id: 3, slug: "hiace-commuter", name: "Toyota Hiace Commuter", class: "Van", pax: 15, status: "available", image: null },
  { id: 4, slug: "elf-long-giga", name: "Isuzu Elf Long Giga", class: "Bus Mini", pax: 20, status: "available", image: null },
  { id: 5, slug: "innova-venturer", name: "Toyota Innova Venturer", class: "MPV Premium", pax: 7, status: "available", image: null },
  { id: 6, slug: "innova-reborn", name: "Toyota Innova Reborn", class: "MPV", pax: 7, status: "available", image: null },
];

export async function ArmadaGrid() {
  let units = FALLBACK;
  try {
    const data = await getVehicles();
    if (data.length) units = data;
  } catch {
    // ponytail: backend down → static list keeps the section alive
  }

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {units.map((u, i) => {
        const img = u.image ?? (LOCAL_IMG.has(u.slug) ? `/mobil/${u.slug}.jpg` : null);
        return (
          <Reveal key={u.slug} delay={i * 100}>
            <a href={wa(`Halo SM88 Trans, saya mau sewa/carter unit ${u.name}.`)} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_25px_60px_-25px_rgba(201,162,39,0.5)]">
              <div className="relative h-52 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-300">
                {img ? (
                  <Image
                    src={img}
                    alt={`${u.name} — armada SM88 Trans`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-ink via-gray-800 to-ink">
                    <IconLuggage width={72} height={72} className="text-gold/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-gold backdrop-blur">{u.class}</span>
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold text-black">
                  <IconUsers width={13} height={13} /> {u.pax} pax
                </span>
                <span
                  className={`absolute bottom-3 left-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur ${
                    u.status === "full"
                      ? "bg-red-500/90 text-white"
                      : u.status === "maintenance"
                        ? "bg-amber-500/90 text-black"
                        : "bg-emerald-500/90 text-black"
                  }`}
                >
                  {u.status === "full" ? "Penuh" : u.status === "maintenance" ? "Perawatan" : "Tersedia"}
                </span>
              </div>
              <div className="border-t border-white/5 p-5">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-gold">{u.name}</h3>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1.5"><IconLuggage width={15} height={15} className="text-gold" /> Kapasitas {u.pax}</span>
                  <span className="flex items-center gap-1.5 font-semibold text-gold">
                    Sewa <IconArrowRight width={14} height={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Armada() {
  return (
    <section id="armada" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Armada</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Armada Premium Kami</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Unit terawat, siap untuk keluarga, rombongan, wisata, dan wedding car.
          </p>
        </Reveal>
        <ArmadaGrid />
      </div>
    </section>
  );
}

export function ArmadaFallback() {
  return (
    <section id="armada" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-4 w-24 rounded bg-white/10" />
        <div className="mt-4 h-9 w-72 rounded bg-white/10" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-80 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </section>
  );
}
