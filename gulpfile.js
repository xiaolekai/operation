/**
 * Created by Administrator on 2017/7/6.
 */
/**
 * Created by Administrator on 2017/7/6.
 */

var gulp = require ('gulp');
var webserver = require ('gulp-webserver');
var  imagemin = require('gulp-imagemin');
var  cssmin = require('gulp-minify-css');
var  htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

gulp.task('webserver' , function () {
    gulp.src('www')
        .pipe(webserver({
            port:'8080',
            livereloa:true,
            directoryListing:{
                path:'www',
                enable:true
            },
            open:true,
            fallback:"index.html" 
        }));
});
gulp.task('testImagemin', function () {
    gulp.src('./www/img/health/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('./www/img/health'));
});
gulp.task('testCssmin', function () {
    gulp.src('./www/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./www/css/'));
});
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./www/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./www'));
});
gulp.task('minjs', function(){
    // 'script/*.js'是需要压缩的js文件
    gulp.src('./www/js/*.js')

        //uglify()是调用的压缩方法，去压缩js
        .pipe(uglify())
        //gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
        .pipe(gulp.dest('./www/js'));
});


