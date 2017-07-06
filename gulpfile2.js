 /**
 * Created by js on 2017/7/6.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');
// 创建服务器连接
gulp.task('connect', function() {
    connect.server({
        root: 'www',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./www/index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./www/index.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);