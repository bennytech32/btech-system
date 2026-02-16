# ... (sehemu ya juu ibaki vile vile)

# Copy Project Files
WORKDIR /var/www/html
COPY . .
COPY --from=node-assets /app/public/build ./public/build

# Weka Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# FIX PERMISSIONS & CACHE (Ongeza hapa)
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Safisha Laravel Cache wakati wa Build
RUN php artisan config:clear && php artisan route:clear

EXPOSE 80
CMD ["apache2-foreground"]