var gulp   = require('gulp');
var tsc    = require('gulp-tsc');
var del    = require('del');
var bump = require('gulp-bump');
 
gulp.task('default',['build'], function(done) {
   return gulp.watch('src/**/*.ts', ['build']);
});

/* Compile Server */
gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('build',['clean'], function () {
  return gulp
  .src(['src/**/*.ts','!./node_modules/**/*.*','typings/main/**/*.d.ts'])
  .pipe(tsc({
    module: "commonjs",
    target:"es6",
    emitError: true,
    sourceMap: true
  }))
  .pipe(gulp.dest('build'));
});

/* increment build*/
gulp.task('bump', function () {
  return   gulp.src('./package.json')
               .pipe(bump())
               .pipe(gulp.dest('./'));
});

