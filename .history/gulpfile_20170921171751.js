const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("run", function() {});

gulp.task("less", function() {
  return gulp
    .src("./develop/**/**.less", { base: "develop" })
    .pipe(less())
    .pipe(rename(function(path){
        path.extname = 'wxss'
    }))
    .pipe(gulp.dest("./page"));
})

