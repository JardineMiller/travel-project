var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssvars = require('postcss-simple-vars'),
	autoprefix = require('autoprefixer'),
 	nested = require('postcss-nested'),
 	cssimport = require('postcss-import'),
 	mixins = require('postcss-mixins');

// Compiles CSS through PostCSS Filter whenever styles.css is saved
gulp.task("styles", function () {
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(postcss([cssimport, mixins, autoprefix, cssvars, nested]))
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest("./app/temp/styles"));
}); 