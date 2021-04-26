var gulp = require("gulp");
var preprocess = require("gulp-preprocess");

gulp.task("html", function (done) {
  return gulp
    .src("build/**/*.html")
    .pipe(preprocess({ context: {} }))
    .on("error", function (error) {
      // we have an error
      console.error(error);
      done(error);
    }) // To set environment undefined or 1
    .pipe(gulp.dest("dist/"));
});

// gulp.task("scripts", function () {
//   gulp.src(["./app/*.js"]).pipe(preprocess()).pipe(gulp.dest("./dist/"));
// });
