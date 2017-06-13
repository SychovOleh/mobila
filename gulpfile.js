'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const concat = require('gulp-concat')

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dest'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});

// 

// var input = './src/styles/**/*.scss';
// var output = './main/css';

// gulp.task('sass', function () {
//   return gulp.src(input)
//     .pipe(sass())
//     .pipe(gulp.dest(output));
// });
// var sassOptions = {
//   errLogToConsole: true,
//   outputStyle: 'expanded'
// };

// gulp.task('sass', function () {
//   return gulp
//     .src(input)
//     .pipe(sass(sassOptions).on('error', sass.logError))
//     .pipe(gulp.dest(output));
// });