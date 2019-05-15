const { dest, src, series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const del = require('del');

function clean(cb) {
  del(['dist/**']);
  cb();
}

function css(cb) {
  src('src/index.css')
    .pipe(cleanCSS())
    .pipe(rename('progressive-image.css'))
    .pipe(dest('dist'));
  cb();
}

function js(cb) {
  src('src/index.js')
    .pipe(uglify())
    .pipe(rename('progressive-image.js'))
    .pipe(dest('dist'));
  cb();
}

exports.build = series(clean, parallel(css, js));
