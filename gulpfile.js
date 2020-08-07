"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp
    .src("sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
      })
    )
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
  gulp.watch("./sass/*.scss", gulp.series("sass"));
});
