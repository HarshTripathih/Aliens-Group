# 1. Use official Node image
FROM node:22.15.0-alpine AS base

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies only first
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your code
COPY . .

# 5. Build the application
RUN npm run build

# 6. Create production image
FROM node:22.15.0-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Copy only the necessary files for running
COPY --from=base /app/.next .next
COPY --from=base /app/public public
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules node_modules

# Next.js App Router requires the source code (e.g., /src/app) to be available at runtime for dynamic routing
COPY --from=base /app/src src

# Expose the port Next.js listens on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
