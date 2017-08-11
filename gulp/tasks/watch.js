var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	// Point BrowserSync to the base directory of your project so that it can create a local web server
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	// Reloads the browser whenever an HTML file is saved.
	watch('./app/index.html', function() {
		browserSync.reload();
	});
	// Watches for whenever a CSS file is saved then perform cssInject
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

// Injects CSS into the web browser AFTER performing the 'styles' task.
gulp.task('cssInject', ['styles'],function() {
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});