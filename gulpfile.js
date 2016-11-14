// *** dependencies *** //

var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');


// *** tasks *** ///

gulp.task('connect', function () {
  connect.server({
    root: './',
    port: 8888,
    livereload: true
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: './dist/',
    port: 9999,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./js/*.js', ['jshint']);
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./css/*.css'], ['css']);
});

gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true, spare:true};
  gulp.src('./css/*.css')
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-js', function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./*.html')
    .pipe(gulp.dest('./dist/'));
});

// *** default *** //
gulp.task('default', ['watch', 'connect']);

// *** build task *** //
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['minify-css'],
    ['minify-js'],
    ['copy-html-files']
  );
});
