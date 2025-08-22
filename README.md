# Flipscout

Monorepo layout
- frontend: Next.js (root)
- backend: TypeScript/Node (backend/)

Quickstart (local)

1. Clone and create branch
   - git clone git@github.com:Johntie12/flipscout.git
   - cd flipscout
   - git checkout -b setup/dev-environment

2. Install dependencies
   - npm install
   - npm --prefix backend install

3. Start Postgres (local)
   - docker run --name flipscout-db -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=flipscout -p 5432:5432 -d postgres:15-alpine

4. Copy env example files and update values
   - cp backend/.env.example backend/.env
   - cp .env.example .env
   - Edit backend/.env and .env as needed.

5. Start both services
   - npm run dev:all

Notes about the repo files added
- backend/.env.example — example environment variables for the backend.
- .env.example — example public env variables for the frontend.
- .github/workflows/ci.yml — CI workflow for building and testing both projects.
- Docker-related files (Dockerfile for frontend and backend, docker-compose.yml) — local and production container setup.

Running with Docker Compose
1. Ensure Docker is running.
2. From repo root:
   - docker-compose up --build
   - The services are mapped:
     - Postgres: localhost:5432
     - Backend: localhost:4000
     - Frontend: localhost:3000

Deploying
- Frontend (recommended): Vercel
  - Connect the GitHub repo, use default Next.js build settings.
  - Set environment variable NEXT_PUBLIC_API_URL to your backend URL in Vercel's dashboard.

- Backend (recommended): Render, Railway, or Render Docker/Service
  - Provision a Postgres instance in the chosen provider.
  - Set DATABASE_URL and JWT_SECRET in the service's environment/secret settings.
  - Build and run the backend with the production Node command (after tsc build).

CI Notes
- The included GitHub Actions workflow installs root and backend deps, lints, builds frontend and backend, and attempts to run tests if present (silently skipping when test scripts are not defined).

Helpful commands
- npm run dev         (frontend)
- npm --prefix backend run dev  (backend)
- npm run dev:all     (both)
- docker-compose up --build (docker)

If you'd like, I can create the branch and open the PR for you once I have permission to push. Otherwise, follow the commands below to create the branch/PR locally.