export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 460" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0b0b" />
          <stop offset="55%" stopColor="#141821" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="sun">
          <stop offset="0%" stopColor="#f6e6a8" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#c9a227" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d2530" />
          <stop offset="100%" stopColor="#0b0b0b" />
        </linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#20242b" />
          <stop offset="100%" stopColor="#0d0f13" />
        </linearGradient>
      </defs>

      <rect width="800" height="460" fill="url(#sky)" />
      <circle cx="600" cy="150" r="150" fill="url(#sun)" className="animate-glow" style={{ transformOrigin: "600px 150px" }} />

      <g opacity="0.9">
        <path d="M0 300 L120 190 L220 270 L330 150 L460 280 L580 200 L700 285 L800 210 L800 340 L0 340 Z" fill="url(#m1)" />
        <path d="M0 330 L150 250 L300 320 L430 240 L560 315 L690 250 L800 310 L800 360 L0 360 Z" fill="#0b0b0b" opacity="0.85" />
      </g>

      <path d="M0 340 L800 340 L800 460 L0 460 Z" fill="url(#road)" />
      <path d="M0 358 L800 358" stroke="#c9a227" strokeWidth="2" opacity="0.35" />
      <path d="M0 358 L800 358" stroke="#e9cf6b" strokeWidth="4" strokeDasharray="34 28" strokeOpacity="0.9" className="animate-dash" />

      <g fill="#e9cf6b">
        {[
          [90, 90, 0.6],
          [180, 140, 0.4],
          [260, 70, 0.7],
          [700, 60, 0.5],
          [520, 110, 0.35],
          [760, 300, 0.45],
        ].map(([x, y, o], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 1.8 : 2.6} opacity={o} className="animate-shimmer" />
        ))}
      </g>
    </svg>
  );
}
