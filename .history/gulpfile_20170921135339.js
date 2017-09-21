const gulp = require('gulp')
const less = require('gulp-less')

gulp.task('run',function(){

})

gulp.task('less',function(){
    return gulp.src('/develop/**/**.less')
            .pipe(less())
            .pipe(gulp.dest("/"))
})