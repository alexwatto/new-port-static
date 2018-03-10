// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint');
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');
    concat = require('gulp-concat');
    gutil = require('gulp-util');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
    return gulp.src('source/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('public/assets/stylesheets/'));
  });

  gulp.task('build-js', function() {
    return gulp.src('source/js/**/*.js')
      .pipe(sourcemaps.init())
        .pipe(concat('alexwatto.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets/js/'));
  });
  
  /* updated watch task to include sass */
  
  gulp.task('watch', function() {
    gulp.watch('source/js/**/*.js', ['jshint']);
    gulp.watch('source/sass/**/*.scss', ['build-css']);
    gulp.watch('source/js/**/*.js', ['build-js']);
    
  });