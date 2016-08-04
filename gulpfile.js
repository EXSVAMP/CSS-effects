var gulp = require('gulp');
var	browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var	config = require('./config.json');
var	root = config.root;


gulp.task('serve', function() {
	browserSync.init({
		server: "./"
	});
	gulp.watch(root + config.html).on('change', reload);
});

gulp.task('default', ['serve']);