# Use the official Nginx base image
FROM nginx:stable-alpine

# Install vim (using alpine package manager)
RUN apk add --no-cache vim

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create cache directory and set permissions
RUN mkdir -p /var/cache/nginx && \
    chmod -R 755 /var/cache/nginx

# Expose port 8080 (as configured in nginx.conf)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]