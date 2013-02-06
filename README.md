# Defunctr

##### Defunctr is a [Modernizr](http://www.modernizr.com) extension JavaScript library that detects browsers using feature detection for use in HTML5 and CSS3.

- [Website](http://github.com/victoriafrench/defunctr)

Defunctr detects which browser is visiting your site by detecting feature sets the browser supports. The purpose is to allow UX changes where a change must be made explicitly to an older browser. Using
user-agent detection easily fails and apply browser hacks do not work in all cases. Defunctr makes this detection available in two ways: as properties on a global `Defunctr` object, and as classes on the
`<html>` element. This information allows you to enhance your pages with a granular level of control.

Defunctr has the ability to exclude testing and tagging by appending any of the following classes to your pages `<html>` element:

* `defunctr-ie-only`: Defunctr will only include ie testing
* `defunctr-version-off`: Defunctr will not add browser version classes to the `<head>` element
* `defunctr-lt-off`: Defunctr will not add less than version classes to the `<head>` elememnt
* `defunctr-gt-off`: Defunctr will not add greater than version classes to the `<head>` element
	
### Classes created by Defunctr

* `.ie` or `.no-ie`: Defines if the browser is Internet Explorer. This feature is always on.
* `.chrome` or `.no-chrome`: Defines if the browser is Chrome. This feature is turned off by adding `defunctr-ie-only`. 
* `.safari` or `.no-safari`: Defines if the browser is Safari. This feature is turned off by adding `defunctr-ie-only`. 
* `.webkit` or `.no-webkit`: Defines if the browser is Webkit including Chrome and Safari. This feature is turned off by adding `defunctr-ie-only`. 
* `.firefox` or `.no-firefox`: Defines if the browser is Firefox. This feature is turned off by adding `defunctr-ie-only`. 
* `.opera` or `.no-opera`: Defines if the browser is Opera. This feature is turned off by adding `defunctr-ie-only`. 


* `.ie-version-7` and `.no-ie-version-7`: Defines if the browser is IE 7. This feature is turned off by adding `defunctr-version-off`. 
* `.ie-version-8` and `.no-ie-version-8`: Defines if the browser is IE 8. This feature is turned off by adding `defunctr-version-off`. 
* `.ie-version-9` and `.no-ie-version-9`: Defines if the browser is IE 9. This feature is turned off by adding `defunctr-version-off`. 

* `.ie-gt-6` and `.no-ie-gt-6`: Defines if the browser is IE 7+. This feature is turned off by adding `defunctr-gt-off`. 
* `.ie-gt-7` and `.no-ie-gt-7`: Defines if the browser is IE 8+. This feature is turned off by adding `defunctr-gt-off`. 
* `.ie-gt-8` and `.no-ie-gt-8`: Defines if the browser is IE 9+. This feature is turned off by adding `defunctr-gt-off`. 
* `.ie-gt-9` and `.no-ie-gt-9`: Defines if the browser is IE 10+. This feature is turned off by adding `defunctr-gt-off`. 

* `.ie-lt-7` and `.no-ie-lt-7`: Defines if the browser is less than IE 7. This feature is turned off by adding `defunctr-lt-off`. 
* `.ie-lt-8` and `.no-ie-lt-8`: Defines if the browser is less than IE 8. This feature is turned off by adding `defunctr-lt-off`. 
* `.ie-lt-9` and `.no-ie-lt-9`: Defines if the browser is less than IE 9. This feature is turned off by adding `defunctr-lt-off`. 
* `.ie-lt-10` and `.no-ie-lt-10`: Defines if the browser is less than IE 10. This feature is turned off by adding `defunctr-lt-off`. 

### Limitations on this release

* Opera can only be detected from version 8.0+
* Firefox can only be detected from version 0.8+
* Safari can only be detected from version 3.0+
* Chrome can only be detected from version 1.0+
* Khtml is currently not supported
* Only IE gives version information

### License

MIT lincense
