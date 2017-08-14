var gulp = require('gulp');
var strip = require('gulp-strip-comments');
var pkg = require('./package.json');
var replace = require('gulp-replace');
var banner = require('gulp-banner');
var minify = require('gulp-uglify');
var rename = require('gulp-rename');
var bump = require('gulp-bump');
var nugetpack = require('gulp-nuget-pack');
var pump = require('pump');
var gulpSequence = require('gulp-sequence');
//var main = pkg['main'];
//var mainmod = pkg['jsnext:main'];
var version = pkg['version'];
var build_tag = version
var buildDate = (new Date()).toISOString();

var header = '/*!\r\n' +
' * <%= pkg.title %> <%= build_tag %>\r\n' +
' * <%= pkg.homepage %>\r\n' +
' *\r\n' +
' * Copyright 2012 - <%= (new Date()).getFullYear() %> <%= pkg.author.name %>\r\n' +
' * Released under the <%= pkg.license %> license\r\n' +
' * <%= pkg.licenseUrl %>\r\n' +
' *\r\n' +
' * Build Date: <%= buildDate %>\r\n' +
' */\r\n';

gulp.task('nuget-pack', function (callback) {
  nugetpack({
    id: 'Defunctr',
    title: 'Defunctr',
    version: version,
    authors: 'Cinecove',
    owners: 'Cinecove',
    description: 'Defunctr is a module for Modernizr that will detect the current browser using feature detection. It will then append browser informational classes to the head element of the page, giving the designer the ability to override CSS styles without using older browser hacks. Changing the browsers compatibility mode will cause the correct classes to be applied and changing a user-agent will have not effect on the class generation.',
    releaseNotes: 'See ' + pkg.homepage + ' for release notes for version ' + build_tag,
    summary: 'Defunctr is a module for Modernizr that will append browser versioning information into the head element of your web pages using feature detection.',
    projectUrl: pkg.homepage,
    licenseUrl: pkg.licenseUrl,
    copyright: '2013 - ' + (new Date()).getFullYear() + ' ' + pkg.author.name,
    requireLicenseAcceptance: false,
    dependencies: [],
    tags: 'Modernizr, Browser Detection, HTML5, Shiv',
    outputDir: 'nuget',
    baseDir: '.'
  },[
    { src: 'dist/defunctr-dev.js', dest: '/content/scripts/defunctr/defunctr.js'},
    { src: 'dist/defunctr.js', dest: '/content/scripts/defunctr/defunctr.min.js'},
    { src: 'LICENSE.md', dest: '/content/scripts/defunctr/license.md'},
    { src: 'CHANGELOG.md', dest: '/content/scripts/defunctr/changelog.md'},
    { src: 'docs/migrating-to-npm.md', dest: '/content/scripts/defunctr/migrate-to-npm.md'}
  ],
  callback
  );
});

gulp.task('bump', function() {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('bump-beta', function() {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type: 'prerelease'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', function() {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type: 'minor'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function() {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type: 'major'}))
    .pipe(gulp.dest('./'));
});

gulp.task('compress', function (cb) {
  var options = {
    output: {
      comments: true
    },
    mangle: {
      //reserved: ['Modernizr', 'window', 'navigator']
    },
    ie8: true
  };
  pump([
    gulp.src('./dist/defunctr.js'),
    minify(options),
    gulp.dest('./dist'),
    rename({ suffix: '.min' }),
    gulp.dest('./release'),
    rename({ basename: 'defunctr', suffix: '-' + version + '.min'}),
    gulp.dest('./release')
  ], cb);
});

gulp.task('build-umd', function () {
  return gulp.src('./dist/defunctr.js')
    .pipe(strip())
    .pipe(replace('@@version', version))
    .pipe(banner(header, { pkg: pkg, build_tag: build_tag, buildDate: buildDate }))
    .pipe(gulp.dest('./docs/scripts'))
    .pipe(gulp.dest('./release'))
    .pipe(rename({suffix: '-' + version}))
    .pipe(gulp.dest('./release'))
    .pipe(rename({basename: 'defunctr', suffix: '-dev'}))
    .pipe(gulp.dest('./dist'))
    .pipe(rename({ basename: 'defunctr', suffix: '' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-npm', function () {
  return gulp.src('./dist/index.js')
    .pipe(strip())
    .pipe(replace('@@version', version))
    .pipe(banner(header, { pkg: pkg, build_tag: build_tag, buildDate: buildDate }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', function (cb) {
  gulpSequence('build-npm', 'build-umd', 'compress', cb);
});

gulp.task('release', function (cb) {
  gulpSequence('build', 'nuget-pack', cb);
});

gulp.task('default', ['build']);
