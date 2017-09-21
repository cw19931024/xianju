const gulp = require("gulp");
const less = require("gulp-less");
const rename = require("gulp-rename");
gulp.task("run", function() {});

gulp.task("less", function() {
  return gulp
    .src("./develop/**/**.less", { base: "develop" })
    .pipe(less())
    .pipe(rename(function(path){
        path.extname = '.wxss'
    }))
    .pipe(gulp.dest("./page"));
})

gulp.task('html',function(){
    return gulp.src("./develop/**/**.html")
    .pipe(rename(function(path){
        path.extname = 'wxml'
    }))
    .pipe(gulp.dest("./page"))
})