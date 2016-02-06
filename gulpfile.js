var gulp    = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require("gulp-cssnext")

gulp.task('default', function() {
  gulp.src("./classes/classes.css")
    .pipe(cssnext())
    .pipe(gulp.dest("./dist"))
});
