# Production Dockerfile for Next.js frontend (root)
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm ci

# Copy rest of project
COPY . .

# Build Next.js
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app and production deps
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]