'use strict';

const gulp = require('gulp');
const sass = require('gulp-dart-sass');

gulp.task('bulma-theme-sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/themes/bulma/css'));
});


function defaultTask(cb) {
    console.log("Usage: gulp [clean | build | js | css | scss | deploy | config]");
    cb();
}

exports.default = defaultTask