// All of the super awesome tools
var gulp = require('gulp'),
 	watch = require('gulp-watch'),
 	cssvars = require('postcss-simple-vars'),
 	postcss = require('gulp-postcss'),
	autoprefix = require('autoprefixer'),
 	nested = require('postcss-nested');

// A basic GULP task
gulp.task("html", function () {
	console.log("Imagine something useful being done to your HTML here.");
});

// Compiles CSS through PostCSS Filter whenever styles.css is saved
gulp.task("styles", function () {
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(postcss([autoprefix, cssvars, nested]))
	.pipe(gulp.dest("./app/assets/temp/styles"));
}); 

// Watches a set of files and tells it to perform a task (html or styles) whenever a change is made to those files
gulp.task('watch', function() {
	watch('./app/index.html', function() {
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});

