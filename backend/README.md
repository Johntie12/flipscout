# FlipScout Backend (Scaffold)

This is a minimal Node.js + Express scaffold for the FlipScout backend with basic JWT authentication.

Files included:
- package.json — project metadata and scripts
- src/index.js — Express server with register/login endpoints (in-memory users for scaffold)
- src/auth.js — JWT verification middleware
- .env.example — environment variable examples
- Dockerfile — simple container for the app

This scaffold is intended as a starting point. Replace the in-memory store with a database and add proper validation, rate-limiting, logging, and tests before production use.
