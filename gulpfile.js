/// <binding AfterBuild='copy:views, copy:styles' />
var	gulp = require('gulp'),
	gp_sass = require('gulp-sass'),
	gp_concat = require('gulp-concat'),
	gp_sourcemaps = require('gulp-sourcemaps');

var srcPaths = {
	contents: [
		'contents/**'
	]
}

var desPaths = {
	sass_build: 'contents/css/'
}

// Compile Less contents
gulp.task('build:sass', function () {

	/// Compile Sass Files and Move to CSS Folder
	return gulp.src(srcPaths.contents + '/sass/main.scss')
		.pipe(gp_sourcemaps.init())
		.pipe(gp_sass().on('error', gp_sass.logError))
		.pipe(gp_concat('main.css'))
		.pipe(gp_sourcemaps.write('.'))
		.pipe(gulp.dest(desPaths.sass_build));
});

// Default
gulp.task('default', ['build:sass']);
