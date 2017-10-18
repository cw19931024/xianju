const gulp = require("gulp");
const less = require("gulp-less");
const rename = require("gulp-rename");
const gulpTask = require('gulp-sequence')
gulp.task("run", function() {});

const url='./pages'
const develop = './develop/**/**'

gulp.task("less", function() {
  return gulp
    .src(develop+".less", { base: "develop" })
    .pipe(less())
    .pipe(rename(function(path){
        path.extname = '.wxss'
    }))
    .pipe(gulp.dest(url))
})

gulp.task('html',function(){
    return gulp.src(develop+".html",{base:'develop'})
    .pipe(rename(function(path){
        path.extname = '.wxml'
    }))
    .pipe(gulp.dest(url))
})

gulp.task('copy',function(){
    return gulp.src([develop+".js",develop+".json"],{base:'develop'})
    .pipe(gulp.dest(url))
})

gulp.task('run',['copy','html','less'],function(){
    gulp.watch([develop+'.js',develop+'.json'],['copy']);
    gulp.watch(develop+'.html',['html']);
    gulp.watch(develop+'.less',['less']);
})