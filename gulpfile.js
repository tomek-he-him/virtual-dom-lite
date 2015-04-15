'use strict';

var del = require('del');

var gulp = require('gulp-help')(require('gulp'));
var babel = require('gulp-babel');

// `gulp build`
// ----------------------------------------------------------------------------
gulp.task('build',
  'Compile everything.',
  ['clean', 'scripts']
);

// `gulp scripts`
// ----------------------------------------------------------------------------
var scripts = {
  source: 'source/**/*.js'
};

gulp.task('scripts',
  'Build distribution scripts',
  ['scripts:es6', 'scripts:es5']
);

gulp.task('scripts:es6', false,
  ['scripts:clean'],
  function() {
    return gulp.src(scripts.source)
      .pipe(gulp.dest('dist.es6'))
    ;
  }
);

gulp.task('scripts:es5', false,
  ['scripts:clean'],
  function() {
    return gulp.src(scripts.source)
      .pipe(babel())
      .pipe(gulp.dest('dist.es5'))
    ;
  }
);

gulp.task('scripts:clean', function(done) {
  del(['dist.es5', 'dist.es6'], done);
});

// `gulp clean`
// ----------------------------------------------------------------------------
gulp.task('clean', ['scripts:clean']);
