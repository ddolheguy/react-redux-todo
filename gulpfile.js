var gulp = require('gulp');
var webpack = require('webpack');


gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('default',['webpack', 'copy'], function() {
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});

