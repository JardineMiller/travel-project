var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefix = require('autoprefixer'),
 	watch = require('gulp-watch'),
 	cssvars = require('postcss-simple-vars'),
 	nested = require('postcss-nested');

gulp.task("default", function () {
	console.log("Hooray! You created a Gulp Task");
});

gulp.task("html", function () {
	console.log("Imagine something useful being done to your HTML here.");
});

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

