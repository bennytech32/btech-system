<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL; // Ongeza hii

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // LAZIMISHA HTTPS KWENYE PRODUCTION
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
    }
}