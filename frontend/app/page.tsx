import Image from "next/image";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import BookingWidget from "@/components/BookingWidget";
import Armada, { ArmadaFallback } from "@/components/Armada";
import Rute, { FooterRoutes, RuteFallback } from "@/components/Rute";
import { HeroScene } from "@/components/Art";
import { getTestimonials } from "@/lib/api";
import {
  IconClock, IconTour, IconLandmark, IconPlane, IconBriefcase, IconGem, IconMap,
  IconShield, IconUserCheck, IconTimer, IconDoor, IconWhatsapp, IconStar,
  IconArrowRight, IconCheck, IconSparkle,
} from "@/components/Icons";

const LAYANAN = [
  { judul: "Travel Reguler", teks: "Antar kota terjadwal, door-to-door, per kursi", Icon: IconClock, wa: "travel" },
  { judul: "Carter Pariwisata", teks: "Sewa unit untuk perjalanan wisata", Icon: IconTour, wa: "carter" },
  { judul: "Carter Ziarah", teks: "Perjalanan ziarah rombongan", Icon: IconLandmark, wa: "carter" },
  { judul: "Antar Jemput", teks: "Bandara, stasiun, pelabuhan, hotel", Icon: IconPlane, wa: "travel" },
  { judul: "Acara Dinas", teks: "Perjalanan kerja, meeting, keluarga", Icon: IconBriefcase, wa: "travel" },
  { judul: "Wedding Car", teks: "Unit premium + opsi dekorasi", Icon: IconGem, wa: "carter" },
  { judul: "Tour Wisata", teks: "Paket Bali, Bromo, Ijen, Malang", Icon: IconMap, wa: "carter" },
];

const KEUNGGULAN = [
  { label: "Armada Premium", text: "Unit terawat, AC, reclining seat", Icon: IconShield },
  { label: "Driver Profesional", text: "Sopan, berpengalaman, ramah", Icon: IconUserCheck },
  { label: "On Time", text: "Berangkat sesuai jadwal", Icon: IconTimer },
  { label: "Door to Door", text: "Jemput & antar sampai alamat", Icon: IconDoor },
];

const TESTIMONI = [
  { nama: "Budi", role: "Penumpang Surabaya", text: "Travelnya tepat waktu, harga jelas, no biaya tersembunyi." },
  { nama: "Siti", role: "Wisatawan Bali", text: "Awalnya ragu booking online, ternyata lancar sampai e-ticket." },
  { nama: "Hendra", role: "Rombongan ziarah", text: "Hiace untuk ziarah rombongan sangat puas." },
];

const MARQUEE = [
  "Travel Reguler", "Door to Door", "Armada Premium", "On Time",
  "Carter Pariwisata", "Wedding Car", "Tour Wisata",
];

const rp = (n: number) => "Rp " + n.toLocaleString("id-ID");
const WA_TRAVEL = "6281226688882";
const WA_CARTER = "6287862187796";
const wa = (no: string, text: string) => `https://wa.me/${no}?text=${encodeURIComponent(text)}`;

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Suspense fallback={<RuteFallback />}>
          <Rute />
        </Suspense>
        <Layanan />
        <Suspense fallback={<ArmadaFallback />}>
          <Armada />
        </Suspense>
        <Keunggulan />
        <Testimoni />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HeroScene className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-gold/15 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-sea/25 blur-[120px] animate-float-slow" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <IconSparkle className="text-gold" />
              Solusi Perjalanan Anda
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
              Perjalanan <span className="text-gradient-gold">Aman, Nyaman</span> &amp; Terpercaya
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="max-w-md text-lg text-gray-300">
              Travel reguler Situbondo, carter armada premium, tour wisata, dan wedding car.
              Door-to-door, on time, tanpa biaya tersembunyi.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="flex flex-wrap gap-3">
              <a href="#rute" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold to-yellow-500 px-7 py-3.5 font-bold text-black shadow-[0_0_30px_-8px_rgba(201,162,39,0.8)] transition hover:scale-[1.03]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">Lihat Rute &amp; Tarif <IconArrowRight width={18} height={18} /></span>
              </a>
              <a href="#armada" className="group rounded-full border border-gold/50 px-7 py-3.5 font-bold text-gold transition hover:bg-gold hover:text-black">
                <span className="flex items-center gap-2">Jelajahi Armada <IconArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" /></span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">6+</span>
                <span>Unit Premium</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">3</span>
                <span>Rute Reguler</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">4.9</span>
                <span>Rating Ulasan</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-4">
          <BookingWidget />
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-r from-ink via-gray-900 to-ink py-3.5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-gray-400">
            {m}
            <IconSparkle className="text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-b from-gray-200 to-gray-400 p-6">
              <Image
                src="/mobil/innova-venturer.jpg"
                alt="Toyota Innova Venturer SM88 Trans"
                width={640}
                height={420}
                className="w-full rounded-2xl object-contain animate-tilt drop-shadow-2xl"
              />
              <div className="mt-4 flex justify-between text-sm font-medium text-black/70">
                <span>Keluarga</span>
                <span>Rombongan</span>
                <span>Dinas</span>
                <span>Wisata</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Tentang Kami</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Solusi Perjalanan di <span className="text-gradient-gold">Setiap Kebutuhan</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-gray-300">
              SM88 Trans adalah penyedia jasa travel reguler, carter, tour, dan wedding car berbasis di
              Situbondo, Jawa Timur. Dengan armada premium dan driver profesional, kami siap mengantar Anda
              dengan aman, nyaman, dan tepat waktu.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-6 space-y-3 text-gray-300">
              {[
                "Legalitas & armada terawat",
                "Harga transparan, tanpa biaya tersembunyi",
                "Driver berpengalaman & ramah",
                "Layanan door-to-door",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"><IconCheck width={14} height={14} /></span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Layanan() {
  return (
    <section id="layanan" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Layanan</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Semua Kebutuhan Perjalanan</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LAYANAN.map((l, i) => (
            <Reveal key={l.judul} delay={i * 80}>
              <a href={wa(l.wa === "carter" ? WA_CARTER : WA_TRAVEL, `Halo SM88 Trans, saya mau tanya layanan ${l.judul}.`)} target="_blank" rel="noopener noreferrer" className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-black group-hover:scale-110">
                  <l.Icon width={24} height={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-gold">{l.judul}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{l.teks}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Keunggulan() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Keunggulan</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Kenapa Pilih SM88 Trans</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {KEUNGGULAN.map((k, i) => (
            <Reveal key={k.label} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-gray-900 to-black p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <k.Icon width={30} height={30} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{k.label}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{k.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimoni() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Testimoni</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Kata Penumpang</h2>
        </Reveal>
        <Suspense fallback={<TestimoniFallback />}>
          <TestimoniGrid />
        </Suspense>
      </div>
    </section>
  );
}

function TestimoniFallback() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-52 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
      ))}
    </div>
  );
}

async function TestimoniGrid() {
  let items = TESTIMONI;
  try {
    const data = await getTestimonials();
    if (data.length) items = data.map((t) => ({ nama: t.name, role: t.role ?? "", text: t.text, rating: t.rating }));
  } catch {
    // ponytail: backend down → static list keeps the section alive
  }

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-3">
      {items.map((t, i) => (
        <Reveal key={t.nama} delay={i * 120}>
          <figure className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50">
            <div className="flex gap-1 text-gold">
              {[...Array(5)].map((_, s) => <IconStar key={s} />)}
            </div>
            <blockquote className="mt-4 text-gray-300">&ldquo;{t.text}&rdquo;</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-yellow-600 font-display font-bold text-black">
                {t.nama[0]}
              </span>
              <div>
                <div className="text-sm font-bold text-white">{t.nama}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 p-8 sm:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-gold via-yellow-500 to-gold animate-gradient bg-[length:200%_200%]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
            <div className="relative text-center text-black">
              <h2 className="font-display text-3xl font-bold sm:text-5xl">Butuh Bantuan Booking?</h2>
              <p className="mx-auto mt-3 max-w-lg text-black/80">Hubungi kami sekarang, siap melayani setiap kebutuhan perjalanan Anda.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={`https://wa.me/${WA_TRAVEL}`} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-full bg-black px-7 py-3.5 font-bold text-gold transition hover:scale-[1.03]">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2"><IconWhatsapp width={20} height={20} /> 0812-2668-8882 · Travel</span>
                </a>
                <a href={`https://wa.me/${WA_CARTER}`} target="_blank" rel="noopener noreferrer" className="group rounded-full border-2 border-black px-7 py-3.5 font-bold text-black transition hover:bg-black hover:text-gold hover:scale-[1.03]">
                  <span className="flex items-center justify-center gap-2"><IconGem width={20} height={20} /> 0878-6218-7796 · Carter</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WA_TRAVEL}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      aria-label="Chat WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <IconWhatsapp className="relative" width={28} height={28} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 text-sm text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display text-xl font-bold text-gold">SM88 Trans</h4>
            <p className="mt-3">Jl. Irian Jaya P-06, Pasar Mimbaan Baru, Situbondo</p>
            <p className="mt-2 text-gray-500">Solusi Perjalanan Anda di Setiap Kebutuhan</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-white">Rute Populer</h4>
            <Suspense fallback={<div className="mt-3 h-16 animate-pulse rounded bg-white/5" />}>
              <FooterRoutes />
            </Suspense>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-white">Layanan</h4>
            <ul className="mt-3 space-y-2">
              {LAYANAN.slice(0, 5).map((l) => (
                <li key={l.judul}><a href="#layanan" className="transition hover:text-gold">{l.judul}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-white">Kontak</h4>
            <ul className="mt-3 space-y-2">
              <li><a href={`https://wa.me/${WA_TRAVEL}`} className="flex items-center gap-2 transition hover:text-gold"><IconWhatsapp width={15} height={15} /> 0812-2668-8882 · Travel</a></li>
              <li><a href={`https://wa.me/${WA_CARTER}`} className="flex items-center gap-2 transition hover:text-gold"><IconWhatsapp width={15} height={15} /> 0878-6218-7796 · Carter</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-gray-600">© 2026 SM88 Trans. All rights reserved.</p>
      </div>
    </footer>
  );
}
