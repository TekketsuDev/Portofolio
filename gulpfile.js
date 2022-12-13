const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

function scssTask(){
    return src('app/scss/*.scss', { sourcemaps: true})
        .pipe(sass({
            outputStyle: "expanded"
        }))
        //.pipe(postcss([cssnano()]))
        .pipe(dest('dist', {sourcemaps: '.'}));
}

//Javascript Task
function jsTask(){
    return src('app/js/app.js', {sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.'}));
}

// Browsersync  

function browsersyncServe(cb) {
    browsersync.init({
        //watch: true,
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    
    browsersync.reload();
    cb();
}

//Watch Task
function watchTask() {
    watch('*.html', browsersyncReload);
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}
//Gulp Task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);