# ─────────────────────────────────────────────
# Stage 1: Build the Angular app
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json ./

# Install with legacy peer deps to handle version mismatches
RUN npm install --legacy-peer-deps

# Copy the rest of the source
COPY . .

# Build for production
RUN npx ng build --configuration=production

# ─────────────────────────────────────────────
# Stage 2: Serve with Nginx (tiny Alpine image)
# ─────────────────────────────────────────────
FROM nginx:alpine AS production

# Remove default Nginx placeholder page
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular output from builder stage
COPY --from=builder /app/dist/flowllet-landing/browser /usr/share/nginx/html

# Copy custom Nginx config (SPA routing, gzip, caching, security headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]