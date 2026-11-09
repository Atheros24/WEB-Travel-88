# WEB-Travel-88 — SM88 Trans

Monorepo untuk website travel SM88 Trans (Situbondo).

```
backend/    Laravel 12 + PostgreSQL  (admin panel + REST API)
frontend/   Next.js 16               (website publik)
```

## Backend (`backend/`)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve --port=8000
```
Admin: http://127.0.0.1:8000/admin — login `admin@sm88trans.id` / `password` (ganti setelah deploy).

API: `GET /api/v1/{routes,vehicles,testimonials}`, `POST /api/v1/bookings`.

Detail: `backend/README.md`.

## Frontend (`frontend/`)
```bash
cd frontend
npm install
cp .env.example .env.local   # API_ORIGIN=http://127.0.0.1:8000
npm run dev
```
Detail: `frontend/README.md`.

## Deploy
- Frontend: Vercel. Set `API_ORIGIN` ke URL backend publik.
- Backend: butuh host PHP + PostgreSQL. Set `APP_URL`, kunci `config/cors.php` ke domain frontend.
