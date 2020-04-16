let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy([
    'resources/js/jquery.js',
    'resources/js/bootstrap.js',
    'resources/js/spectrum.js'
], 'public/assets/js/');

mix.js('resources/js/app.js', 'public/assets/js/app.js');

mix.babel([
    'resources/js/components/cash.js',
    'resources/js/components/component.js',
    'resources/js/components/global.js',
    'resources/js/components/forms.js',
    'resources/js/components/waves.js',
    'resources/js/preloader.js',
    'resources/js/profile-editor.js',
], 'public/assets/js/xenin.js')

    .sass('resources/sass/bootstrap.scss', 'public/assets/css/xenin.css');

if (mix.inProduction()) {
    mix.version();
}