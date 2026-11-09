"use client";

import { useState } from "react";
import Image from "next/image";
import { IconWhatsapp, IconMenu, IconClose } from "@/components/Icons";

const LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Rute & Tarif", href: "#rute" },
  { label: "Armada", href: "#armada" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#beranda" className="group relative z-10 inline-flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt="Logo SM88 Trans"
            width={40}
            height={40}
            priority
            className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="relative z-10 font-display text-xl font-extrabold text-gold transition-colors group-hover:text-white">
            SM88 Trans
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 transition hover:text-gold"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-x-2 -bottom-1.5 h-0.5 origin-right scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/6281226688882"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-gold to-yellow-500 px-4 py-2 text-sm font-bold text-black shadow-[0_0_20px_-5px_rgba(201,162,39,0.6)] transition hover:shadow-[0_0_30px_-5px_rgba(201,162,39,0.9)] sm:flex"
        >
          <IconWhatsapp width={16} height={16} />
          Pesan Sekarang
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="sm:hidden rounded-lg p-2 text-gold transition hover:bg-white/5"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden animate-rise">
          <nav className="border-t border-white/5 bg-black px-4 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
