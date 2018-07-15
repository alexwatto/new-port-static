// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint');
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');
    concat = require('gulp-concat');
    gutil = require('gulp-util');
    uglify = require('gulp-uglify-es').default;
    cleanCSS = require('gulp-clean-css');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
    return gulp.src('source/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('public/assets/stylesheets/src'));
});

gulp.task('build-js', function() {
    return gulp.src('source/js/**/*.js')
      .pipe(sourcemaps.init())
        .pipe(concat('alexwatto.min.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(uglify()) 
        .pipe(sourcemaps.write())
      .pipe(gulp.dest('public/assets/js/'));
    });

gulp.task('minify-css', () => {
    return gulp.src('public/assets/stylesheets/src/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/assets/stylesheets'));
    });

gulp.task('default', ['jshint', 'build-css', 'build-js', 'minify-css']);
