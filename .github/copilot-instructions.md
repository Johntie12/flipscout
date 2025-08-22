# FlipScout Development Instructions

FlipScout is a full-stack web application for vehicle flipping with a Next.js + TypeScript frontend and Express.js backend API with JWT authentication. The frontend provides scouting tools and dashboards, while the backend handles user registration, authentication, and API endpoints.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup and Dependencies
- Install frontend dependencies: `npm install` (takes ~20 seconds)
- Install backend dependencies: `cd backend && npm install` (takes ~18 seconds)
- Install backend runtime dependencies in root: `npm install bcryptjs jsonwebtoken dotenv express` (takes ~2 seconds)

### Building and Testing
- **NEVER CANCEL: Build takes 15 seconds. Set timeout to 60+ minutes to be safe.**
- Build frontend: `npm run build` -- builds Next.js application successfully in ~15 seconds
- Lint frontend: `npm run lint` -- runs ESLint checks in ~2 seconds
- **No unit tests exist in this repository** -- only manual testing is available

### Development Servers
- Start frontend only: `npm run dev` -- starts on http://localhost:3000
- Start backend only (from root): `PORT=3001 node src/index.js` -- starts on http://localhost:3001
- **IMPORTANT: The `npm run dev:all` command FAILS due to backend TypeScript/JavaScript mismatch**

### Production Deployment
- Production build: `npm run build` (must be run before starting production server)
- Start production server: `npm start` -- starts Next.js production server on port 3000
- **Note: Production server requires a successful build to exist first**

## Validation Scenarios

### Frontend Validation (Always Required)
1. Navigate to http://localhost:3000 in browser
2. Verify homepage displays "FlipScout" title and "Scouting tools and dashboards for flipping inventory" description
3. Check that "Welcome" section shows scaffold information about Next.js + TypeScript + Tailwind
4. Confirm "Get started" button is clickable (links to "#")
5. Verify no console errors in browser developer tools

### Backend API Validation (Always Required)
1. Start backend: `PORT=3001 node src/index.js`
2. Test user registration: `curl -X POST http://localhost:3001/register -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"testpass123"}'`
3. Expected response: `{"id":"[timestamp]","email":"test@example.com"}`
4. Test user login: `curl -X POST http://localhost:3001/login -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"testpass123"}'`
5. Expected response: `{"token":"[JWT_TOKEN]"}`
6. Test protected endpoint: `curl -H "Authorization: Bearer [JWT_TOKEN]" http://localhost:3001/me`
7. Expected response: `{"id":"[timestamp]","email":"test@example.com"}`

### Complete End-to-End Validation
Always run this full scenario after making changes:
1. Start both servers (frontend on 3000, backend on 3001)
2. Complete frontend validation steps above
3. Complete backend API validation steps above
4. Verify no port conflicts or startup errors
5. Test user registration → login → protected endpoint flow completely

## Common Issues and Solutions

### Backend Configuration Mismatch
- **Problem**: Backend folder expects TypeScript (`src/index.ts`) but actual files are JavaScript (`src/index.js`, `src/auth.js`) in root
- **Solution**: Always run backend from root directory: `PORT=3001 node src/index.js`
- **DO NOT use**: `npm --prefix backend run dev` (this will fail)

### Port Conflicts
- Frontend defaults to port 3000
- Backend should use port 3001 to avoid conflicts
- If ports are in use, stop other processes or use different ports

### Environment Variables
- Frontend uses `.env.example` for configuration template
- Backend uses in-memory storage (no database required)
- Set `PORT=3001` when starting backend to avoid conflicts

## Repository Structure and Key Files

### Frontend (Next.js + TypeScript + Tailwind)
```
/pages/_app.tsx          -- Main app component
/pages/index.tsx         -- Homepage 
/components/Analytics.tsx -- Analytics wrapper component
/styles/globals.css      -- Global styles
/next.config.js         -- Next.js configuration
/tailwind.config.js     -- Tailwind CSS configuration
/tsconfig.json          -- TypeScript configuration
```

### Backend (Express.js + JWT)
```
/src/index.js           -- Main Express server with auth endpoints
/src/auth.js            -- JWT authentication middleware
/backend/package.json   -- Backend dependencies (TypeScript setup)
```

### Documentation and Configuration
```
/README.md              -- Basic setup instructions
/README-LAUNCH.md       -- Deployment and launch checklist
/.env.example           -- Environment variables template
/.eslintrc.json         -- ESLint configuration
/.gitignore             -- Git ignore rules
```

## Linting and Code Quality
- **Always run** `npm run lint` before committing changes
- ESLint configured with Next.js defaults
- No custom test suite exists -- rely on manual validation
- TypeScript strict mode enabled for frontend

## Known Limitations
- Backend has TypeScript configuration but JavaScript source files
- No automated tests exist -- manual testing required
- In-memory user storage (not persistent)
- No CI/CD workflows configured
- No database integration (uses Map for user storage)

## When Making Changes
1. **Always build and validate** your changes using the validation scenarios above
2. **Always run linting** before considering changes complete
3. **Test both frontend and backend** even for single-component changes
4. **Check for port conflicts** if servers fail to start
5. **Use the exact commands documented here** rather than experimenting with alternatives