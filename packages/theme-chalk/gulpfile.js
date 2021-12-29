const { series, src, dest } = require('gulp');
const sass = require('gulp-dart-sass');
const cssmin = require('gulp-cssmin');
const autoPrefixer = require('gulp-autoprefixer');

// 处理 scss 文件
function compile() {
    return src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(autoPrefixer({}))
        .pipe(cssmin())
        .pipe(dest('./lib'));
}

// 拷贝字体样式
function copyfont() {
    return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyfont);
