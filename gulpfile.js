'use strict';

const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const zip = require('gulp-zip');
const del = require('del');

gulp.task('clean', function () {
    return del(['./dist/**']);
});

gulp.task('bulma-theme-sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/themes/bulma/css'));
});

gulp.task('bulma-theme-dist', function () {
    return gulp.src('./public/themes/bulma/**/*')
        .pipe(zip('bulma.zip'))
        .pipe(gulp.dest('dist'))
});

exports.default = (cb) => {
    console.log("Usage: gulp [clean | build | bulma-theme-sass | bulma-theme-dist]");
    cb();
};

exports.build = gulp.series('clean', 'bulma-theme-sass', 'bulma-theme-dist');