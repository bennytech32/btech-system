# Hatua ya 1: Build React Assets
FROM node:20 as node-assets
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Hatua ya 2: Server ya PHP
FROM php:8.2-apache

# Install System Dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo_mysql bcmath

# Weka Apache Config kuelekea /public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

# Copy Project Files
WORKDIR /var/www/html
COPY . .
COPY --from=node-assets /app/public/build ./public/build

# Weka Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Hakikisha folder ya storage ipo na ina ruhusa
RUN mkdir -p /var/www/html/storage/framework/cache/data \
    && mkdir -p /var/www/html/storage/framework/sessions \
    && mkdir -p /var/www/html/storage/framework/views \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80
CMD ["apache2-foreground"]