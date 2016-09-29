'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const files = ['index.js', 'test/*.js', 'gulpfile.js'];

gulp.task('lint', function () {
    return gulp.src(files)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('test/*.js', { read: false })
        .pipe(mocha());
});

gulp.task('default', ['lint', 'test']);

gulp.task('watch', function () {
    gulp.watch(files, ['lint', 'test']);
});
