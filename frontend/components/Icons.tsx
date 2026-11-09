import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const IconTour = (p: P) => (
  <svg {...base(p)}><path d="M3 20h18" /><path d="m6 20 5-13 3 7 2-4 2 10" /></svg>
);
export const IconLandmark = (p: P) => (
  <svg {...base(p)}><path d="M3 22h18" /><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7" /><path d="M12 2 3 7h18z" /></svg>
);
export const IconPlane = (p: P) => (
  <svg {...base(p)}><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-1 1.6L10 11l-2 3H5l-1.5 1.5 3 1L7.5 20 9 18.5v-3l3-2 3.2 6.2a1 1 0 0 0 1.6-1z" /></svg>
);
export const IconBriefcase = (p: P) => (
  <svg {...base(p)}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" /></svg>
);
export const IconGem = (p: P) => (
  <svg {...base(p)}><path d="M6 3h12l3 6-9 12L3 9z" /><path d="M3 9h18M9 3 6 9l6 12 6-12-3-6" /></svg>
);
export const IconMap = (p: P) => (
  <svg {...base(p)}><path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" /><path d="M9 3v16M15 5v16" /></svg>
);
export const IconShield = (p: P) => (
  <svg {...base(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const IconUserCheck = (p: P) => (
  <svg {...base(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="m16 11 2 2 4-4" /></svg>
);
export const IconTimer = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2M9 2h6" /></svg>
);
export const IconDoor = (p: P) => (
  <svg {...base(p)}><path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17" /><circle cx="13" cy="12" r="1" /></svg>
);
export const IconWhatsapp = (p: P) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.5-.9-2.1-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" /></svg>
);
export const IconStar = (p: P) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z" /></svg>
);
export const IconUsers = (p: P) => (
  <svg {...base(p)}><path d="M7 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-6 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /></svg>
);
export const IconArrowRight = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconSwap = (p: P) => (
  <svg {...base(p)}><path d="M7 16H3V8h4M3 12h13M12 8l4 4-4 4" /></svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}><path d="m5 12 5 5L20 7" /></svg>
);
export const IconPlus = (p: P) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconMinus = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14" /></svg>
);
export const IconMenu = (p: P) => (
  <svg {...base(p)}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconLuggage = (p: P) => (
  <svg {...base(p)}><rect x="4" y="7" width="16" height="14" rx="2" /><path d="M9 7V4h6v3M9 21v-2M15 21v-2M12 11v6" /></svg>
);
export const IconSparkle = (p: P) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6z" /></svg>
);
