'use strict';
const gulp = require('gulp');
const clean = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const webpack = require('gulp-webpack');
const less = require('gulp-less');
gulp.task('less', () => {
  gulp.src('/public/src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
})
gulp.task('js', () => {
  gulp.src('./public/src/js/*.js')
    /*.pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))*/
    .pipe(webpack(
      require('./webpack.config')
    ))
    .pipe(babel({
      presets: ['es2015']
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
});
gulp.task('less',() => {
  gulp.src('./public/src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
})
gulp.task('default',['less','js']);