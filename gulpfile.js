const gulp    = require("gulp");
const sass    = require("gulp-sass");
const uglify  = require('gulp-uglify');
const concat  = require('gulp-concat');

/*
  generate the css with sass
*/
gulp.task('css', function() {
    return gulp.src('./assets/scss/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest('./_site/assets'));
});

/*
 Uglify our javascript files into one.
 Use pump to expose errors more usefully.
*/
gulp.task('js', function() {
    return gulp.src("./assets/js/*.js")
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./_site/assets'));
});

/*
  Watch folders for changess
*/
gulp.task("watch", function() {
    gulp.watch('./assets/scss/**/*.scss', gulp.parallel('css'));
    gulp.watch('./assets/js/*.js', gulp.parallel('js'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
    'css',
    'js'
));
