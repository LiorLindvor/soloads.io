'use strict';

/**
 * Libraries
 */
const
    argv = require('yargs').argv,
    fs = require('fs'),
    boolean = require('boolean'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    sourcemaps = require('gulp-sourcemaps'),
    sequence = require('run-sequence'),
    minifyCSS = require('gulp-minify-css'),
    connect = require('gulp-connect');

/**
 * Sources Paths
 */
const PATHS = {
    js: [
        `src/js/main.js`
    ],
	distFonts: `dist/fonts/`
};

/**
 * Styles
 */

gulp.task('sass:app', () => {
    return gulp
        .src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR Personal Page

gulp.task('sass:personal_page', () => {
    return gulp
        .src('src/scss/personal_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR SPECIAL PAGE

gulp.task('sass:special_page', () => {
    return gulp
        .src('src/scss/special_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR GIFT PAGE

gulp.task('sass:gift_page', () => {
    return gulp
        .src('src/scss/gift_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR UNDER PAGE

gulp.task('sass:under_page', () => {
    return gulp
        .src('src/scss/under_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR OMSKXPU PAGE

gulp.task('sass:omskxpu_page', () => {
    return gulp
        .src('src/scss/omskxpu_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR MONEY PAGE

gulp.task('sass:money_page', () => {
    return gulp
        .src('src/scss/money_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});

// TASK FOR LAZY PAGE

gulp.task('sass:lazy_page', () => {
    return gulp
        .src('src/scss/lazy_page.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(minifyCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/styles'))
});


gulp.task('styles', ['sass:personal_page']);

/**
 * Javascript
 */
// gulp.task('js:app', () => {
//     return gulp
//         .src(PATHS.js)
//         .pipe(sourcemaps.init())
//         .pipe(concat('main.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist/js'))
// });

// gulp.task('js', ['js:app']);

/**
 * Server
 */

 gulp.task('server', function() {
   connect.server();
 });

/**
 * Common
 */

gulp.task('copy:images', () => {
    return gulp
        .src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('clean', () => {
    return gulp
        .src('./dist', {read: false})
        .pipe(rimraf());
});

gulp.task('build', (cb) => {
    sequence('clean',
        [
            'copy:images',
            'styles',
        ], () => cb());
});

gulp.task('default', ['build','server','watch']);

/**
 * Watch
 */
gulp.task('watch', () => {
    gulp.watch('src/**/*.scss', ['sass:app']);
    gulp.watch('src/images/**/*.*', ['copy:images']);
});
