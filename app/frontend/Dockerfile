# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Set memory limit for Node.js build process
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm with a specific version and install dependencies
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate
RUN pnpm install --no-frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]