const BASE =
  typeof window === "undefined"
    ? `${process.env.API_ORIGIN ?? "http://127.0.0.1:8000"}/api/v1`
    : (process.env.NEXT_PUBLIC_API_URL ?? "/api/v1");

export type ApiRoute = {
  id: number;
  origin: string;
  destination: string;
  price: number;
  price_round_trip: number;
  duration: string | null;
  badge: string | null;
};

export async function getRoutes(): Promise<ApiRoute[]> {
  const res = await fetch(`${BASE}/routes`, { cache: "no-store" });
  if (!res.ok) throw new Error(`routes ${res.status}`);
  return res.json();
}

export type ApiVehicle = {
  id: number;
  slug: string;
  name: string;
  class: string;
  pax: number;
  image: string | null;
};

export async function getVehicles(): Promise<ApiVehicle[]> {
  const res = await fetch(`${BASE}/vehicles`, { cache: "no-store" });
  if (!res.ok) throw new Error(`vehicles ${res.status}`);
  return res.json();
}

export async function createBooking(data: {
  customer_name: string;
  phone: string;
  travel_route_id: number;
  trip_type: "single" | "pp";
  travel_date: string;
  pax: number;
}) {
  const res = await fetch(`${BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`booking ${res.status}`);
  return res.json() as Promise<{ ok: boolean; code: string; total_price: number }>;
}
