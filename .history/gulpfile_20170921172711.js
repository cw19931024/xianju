const gulp = require("gulp");
const less = require("gulp-less");
const rename = require("gulp-rename");
gulp.task("run", function() {});

const url='./page'

gulp.task("less", function() {
  return gulp
    .src("./develop/**/**.less", { base: "develop" })
    .pipe(less())
    .pipe(rename(function(path){
        path.extname = '.wxss'
    }))
    .pipe(gulp.dest(url))
})

gulp.task('html',function(){
    return gulp.src("./develop/**/**.html",{base:'develop'})
    .pipe(rename(function(path){
        path.extname = '.wxml'
    }))
    .pipe(gulp.dest(url))
})

gulp.task('js',function(){
    return gulp.src("./develop/**/**.js",{base:'develop'})
    .pipe(gulp.dest(url))
})