'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');

// `gulp build`
// -----------------------------------------------------------------------------

gulp.task('build', ['clean', 'scripts']);

// `gulp scripts`
// -----------------------------------------------------------------------------

var scripts = {
  source: 'source/**/*.js'
};

gulp.task('scripts', ['scripts:es6', 'scripts:es5']);

gulp.task('scripts:es6',
  ['scripts:clean'],
  function() {
    return gulp.src(scripts.source)
      .pipe(gulp.dest('dist.es6'))
      ;
  });

gulp.task('scripts:es5',
  ['scripts:clean'],
  function() {
    return gulp.src(scripts.source)
      .pipe(babel())
      .pipe(gulp.dest('dist.es5'))
      ;
  });

gulp.task('scripts:clean', function(done) {
  del(scripts.source, done);
});

// `gulp clean`
// -----------------------------------------------------------------------------

gulp.task('clean', ['scripts:clean']);
