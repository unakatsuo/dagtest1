'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    standalone: "dag",
    entries: './index.js',
    debug: true
  });
  return b.bundle().pipe(source("dag.js")).pipe(gulp.dest("dist"));
});