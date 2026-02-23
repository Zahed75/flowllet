# ─────────────────────────────────────────────
# Stage 1: Build the Angular app
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first (layer cache optimisation)
COPY package*.json ./

# Install dependencies (legacy-peer-deps to handle PrimeNG/Angular version gap)
RUN npm install --legacy-peer-deps

# Copy the rest of the source
COPY . .

# Build for production
RUN npx ng build --configuration=production

# ─────────────────────────────────────────────
# Stage 2: Serve with Nginx
# ─────────────────────────────────────────────
FROM nginx:alpine AS production

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular output from Stage 1
COPY --from=builder /app/dist/flowllet-landing/browser /usr/share/nginx/html

# Copy custom Nginx config (handles Angular client-side routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
