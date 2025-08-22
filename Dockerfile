# Use a multi-stage build for smaller images
# Assumes Node app with package.json and npm scripts (build and start)
FROM node:18-alpine AS builder
WORKDIR /app

# Install build dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build (optional)
COPY . .
# Run build if present
RUN if [ -f package.json ] && npm run | grep -q build; then npm run build; fi

# Remove dev deps and prepare production node_modules
RUN npm prune --production

# Final image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production node_modules and app files
COPY --from=builder /app ./

# Expose default port (change if your app uses a different port)
EXPOSE 3000

# Use npm start (ensure package.json has a "start" script)
CMD ["npm", "start"]