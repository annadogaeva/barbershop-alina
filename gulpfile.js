'use strict';

const { src, dest, watch, series, } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");

function SASS() {
    return src('./src/styles/*.scss')  // берём все SASS-файлы
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", notify.onError()))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write("."))
        .pipe(dest('./dist')) //// выгружаем результат
        .pipe(browserSync.stream());

}
exports.SASS = SASS;

function myServer() {
    browserSync.init({
        server: {
            baseDir: "./" // папка для локального сервера
        },
        notify: false
    });

    watch('./src/styles/*.scss', { usePolling: true }, SASS) // следим за SASS
}

exports.default = series(SASS, myServer);