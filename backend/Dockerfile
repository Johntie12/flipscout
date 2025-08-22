# Production-ready Dockerfile for backend
FROM node:20-alpine AS base
WORKDIR /app

# Install deps
COPY backend/package*.json ./
RUN npm ci

# Copy source
COPY backend/ ./

# Build
RUN npm run build

# Final image
FROM node:20-alpine
WORKDIR /app
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist

EXPOSE 4000
CMD ["node", "dist/index.js"]