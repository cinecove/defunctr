### HEAD

* Fixed Opera Next detection
* Moved off Grunt to Gulp
* Moved to rollup for UMD and node transpiling
* Migrated all code to ES6
* All tests are stored as separate files now
* If Modernizr is not found, component will use an internal tester
* Allows css class tagging to be turned of by adding `defunctr-off`
* Adding document to illustrate how to migrate a Visual Studio project to NPM so we can stop distributing through NuGet
* Starting to add test suite
* Adding flow
* Build now occurs on Node 6.3+
* Updated dependencies to current versions

### 1.2.3 (May 8, 2016)
* NPM support added

### 1.2.2 (May 8, 2016)
* Fixes for linting issues
* Corrected spelling on css class name `undetected-browser`

## 1.2.1 (January 14, 2016)
* Bower support added

## 1.2.0 (January 14, 2016)
* Support for IE 11
* Support for IE 12 preview
* Support for Edge
* Support for tagging undetected or unknown browsers.
* Added support for require, commmonjs, and amd

### 1.1.2 (January 13, 2016)

* Removed unused variable declarations
* Deprecated window.Defunctr in favor of window.defunctr
* Updated .gitignore with support for webstorm
* Updated humans.txt
* Updated License
* Fixed issue with variable declaration
* Added NPM and Grunt build
* Updated Readme.md
* Updated Changelog.md

### 1.1.1 (February 28, 2014)

* Added Support for Opera Next
* Updated Readme.md
* Updated Changelog.md

### 1.1.0 (February 8, 2013)

* Added simple Test Page
* Updated isIE to filter out potential false positives
* Added Experimental Khtml Detection
* Added .gitignore
* Added .gitattributes
* Added humans.txt
* Added Changelog.md

### 1.0.0 (February 6, 2013)

* Added NuGet Template
* Added Class Configuration Option `defunctr-version-off`
* Added Class Configuration Option `defunctr-gt-off`
* Added Class Configuration Option `defunctr-lf-off`
* Added Class Configuration Option `defunctr-ie-only`
* Added Experimental Version Support for Chrome 15+
* Added Greater and Less Than Support for IE Versions
* Added Version Support for IE 9
* Added Version Support for IE 8
* Added Version Support for IE 7
* Added Version Support for IE 6
* Added Support for Chrome
* Added Support for Safari
* Added Support for Webkit
* Added Support for Opera
* Added Support for IE
* Added License
* Added Readme.md
