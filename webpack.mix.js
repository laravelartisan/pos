const { mix } = require('laravel-mix');

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




mix.js(['resources/assets/js/src/admin/app-admin.js'], 'public/js/app-admin.js')
   .js(['resources/assets/js/app-frontend.js'], 'public/js/app-frontend.js');
    //.js(['resources/assets/js/dashboard.js'], 'public/js/dashboard.js');
   //.sass('resources/assets/sass/app.scss', 'public/css');
mix.styles([
 'public/assets/global/plugins/bootstrap/css/bootstrap.min.css',
 'public/assets/global/plugins/uniform/css/uniform.default.css',
 'public/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
 'public/assets/global/css/components.css',
 'public/assets/global/css/plugins.css',
 'public/assets/admin/layout/css/layout.css',
 'public/assets/admin/layout/css/custom.css',
], 'public/css/backend.min.css')
.styles([
     'public/assets/frontend/css/bootstrap.css',
     'public/assets/frontend/css/jquery.smartmenus.bootstrap.css',
     'public/css/jquery.simpleLens.css',
     'public/css/slick.css',
     'public/css/nouislider.css'
    ],'public/css/frontend.min.css');