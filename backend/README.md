# SM88 Trans — Backend (Laravel + PostgreSQL)

Backend untuk frontend `E:\frontend trans88 situbondo\sm88` (Next.js). Menyediakan **admin panel** dan **API publik** untuk data rute, armada, testimoni, dan booking.

## Stack
- Laravel 12 (PHP 8.2)
- PostgreSQL 16 (Docker: `sinfra_postgres`, port `5431`, db `sm88_trans`)

## Setup
```bash
composer install
cp .env.example .env   # sudah berisi koneksi pgsql
php artisan key:generate
php artisan migrate --seed
php artisan serve --port=8088
```

Admin login default: `admin@sm88trans.id` / `password` (ubah setelah deploy).

## Admin Panel
`/admin` — dashboard, booking (update status), CRUD rute, armada, testimoni, user.

## API Publik (untuk frontend Next.js)
| Method | Endpoint          | Fungsi                        |
|--------|-------------------|-------------------------------|
| GET    | `/api/v1/routes`  | daftar rute aktif             |
| GET    | `/api/v1/vehicles`| daftar armada aktif           |
| GET    | `/api/v1/testimonials` | testimoni terbit          |
| POST   | `/api/v1/bookings`| buat booking (rate-limit 20/menit) |

Contoh booking:
```bash
curl -X POST http://127.0.0.1:8088/api/v1/bookings \
  -H "Content-Type: application/json" \
  -d '{"customer_name":"Budi","phone":"0812","travel_route_id":1,"trip_type":"pp","travel_date":"2026-11-20","pax":2}'
```

## Catatan
- `config/cors.php` membuka `allowed_origins: ['*']` untuk dev Next.js. **Kunci domain asli sebelum production.**
- Frontend masih booking via WhatsApp; endpoint `POST /api/v1/bookings` siap dipakai widget booking.
