const mix = require('laravel-mix')
const Webpack = require('webpack')

mix.js('src/js/app.js', 'build.js')
    .sass('src/scss/app.scss', 'build.css')
    .setPublicPath('dist')
    .vue()
    .webpackConfig({
      plugins: [
        new Webpack.DefinePlugin({
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        }),
      ],
    })
    .options({
      fileLoaderDirs:  {
        fonts: 'src/fonts'
      }
    })