var gulp = require('gulp');
var strip = require('gulp-strip-comments');
var pkg = require('./package.json');
var replace = require('gulp-replace');
var banner = require('gulp-banner');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var bump = require('gulp-bump');
var nugetpack = require('gulp-nuget-pack');
var main = pkg['main'];
var mainmod = pkg['jsnext:main'];
var version = pkg['version'];
var build_tag = version + ((gutil.env.env === undefined || gutil.env.env === 'production' || gutil.env.env === 'prod') ? '' : '-' + gutil.env.env.toLowerCase());
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
    dependencies: [
      { id: 'Modernizr', version: '3.0' }
    ],
    tags: 'Modernizr, Browser Detection, HTML5, Shiv',
    outputDir: 'nuget',
    baseDir: '.'
  },[
    { src: 'dist/defunctr-dev.js', dest: '/content/Scripts/Vendor/Defunctr/defunctr.js'},
    { src: 'dist/defunctr.js', dest: '/content/Scripts/Vendor/Defunctr/defunctr.min.js'},
    { src: 'LICENSE.md', dest: '/content/Scripts/Vendor/Defunctr/license.md'},
    { src: 'CHANGELOG.md', dest: '/content/Scripts/Vendor/Defunctr/changelog.md'},
    { src: 'docs/migrating-to-npm.md', dest: '/content/Scripts/Vendor/Defunctr/migrate-to-npm.md'}
  ],
  callback
  );
});

gulp.task('bump', function() {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('build-umd', function () {
  return gulp.src('./dist/defunctr.js')
    .pipe(strip())
    .pipe(replace('@@version', version))
    .pipe(banner(header, { pkg: pkg, build_tag: build_tag, buildDate: buildDate }))
    .pipe(gulp.dest('./release'))
    .pipe(rename({suffix: '-' + version}))
    .pipe(gulp.dest('./release'))
    .pipe(rename({basename: 'defunctr', suffix: '-dev'}))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify({
      preserveComments: 'all',
      mangle: {
        except: ['Modernizr', 'window', 'navigator']
      }
    }))
    .pipe(rename({ basename: 'defunctr', suffix: ''}))
    .pipe(gulp.dest('./dist'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./release'))
    .pipe(rename({ basename: 'defunctr', suffix: '-' + version + '.min'}))
    .pipe(gulp.dest('./release'));
});

gulp.task('build-npm', function () {
  return gulp.src('./dist/index.js')
    .pipe(strip())
    .pipe(replace('@@version', version))
    .pipe(banner(header, { pkg: pkg, build_tag: build_tag, buildDate: buildDate }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('release', ['build', 'nuget-pack']);


gulp.task('build', ['build-npm', 'build-umd']);

gulp.task('default', ['build']);
