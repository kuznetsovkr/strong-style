let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js').setPublicPath('dist');
mix.sass('src/scss/style.scss', 'dist/css').setPublicPath('dist');
mix.sass('src/scss/lib.scss', 'dist/css').setPublicPath('dist');