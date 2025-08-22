# FlipScout — Backend scaffold

This scaffold provides a minimal Express + TypeScript backend for FlipScout using Postgres.

Features
- Create and list listings
- Import comps via CSV
- Compute valuations (heuristic)
- Persist listings, comps and valuations to Postgres
- Simple migration SQL included

Quickstart
1. Copy `.env.example` to `.env` and set DATABASE_URL and PORT.
2. Ensure Postgres is running and DATABASE_URL points to it.
3. Run migrations:
   psql $DATABASE_URL -f src/models.sql
4. Install dependencies and start:
   cd backend
   npm install
   npm run dev

Endpoints
- POST /api/listings
  - body: { title, marketplace, make, model, year, km, price, state, link }
- GET /api/listings
  - returns listings with latest valuation
- POST /api/comps/import
  - body: { csvText } CSV with header (make,model,year,km,price,state)
- POST /api/estimate
  - body: { listingId } compute valuation for a listing and persist

Notes
- This is an MVP scaffold. Add auth (JWT/session) and per-user isolation before production.
- Use a queue (BullMQ) or cron for periodic re-evaluation and alerts.