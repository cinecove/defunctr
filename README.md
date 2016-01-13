# Defunctr

##### Defunctr is a [Modernizr](http://www.modernizr.com) extension JavaScript library that detects browsers using feature detection for use in HTML5 and CSS3.

- [Website](http://github.com/cinecove/defunctr)
- [NuGet Package](https://www.nuget.org/packages/Defunctr/)

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
* `.chrome` or `.no-chrome`: Defines if the browser is Chrome. 
* `.safari` or `.no-safari`: Defines if the browser is Safari. 
* `.webkit` or `.no-webkit`: Defines if the browser is Webkit including Chrome, Safari, and Opera Next. 
* `.firefox` or `.no-firefox`: Defines if the browser is Firefox. 
* `.opera` or `.no-opera`: Defines if the browser is Opera (non-webkit). 
*  `.opera-next` or `.no-opera-next`: Defines if the browser is Opera Next (webkit). 
* `.ie-version-7` and `.no-ie-version-7`: Defines if the browser is IE 7. 
* `.ie-version-8` and `.no-ie-version-8`: Defines if the browser is IE 8. 
* `.ie-version-9` and `.no-ie-version-9`: Defines if the browser is IE 9. 
* `.ie-gt-6` and `.no-ie-gt-6`: Defines if the browser is IE 7+. 
* `.ie-gt-7` and `.no-ie-gt-7`: Defines if the browser is IE 8+. 
* `.ie-gt-8` and `.no-ie-gt-8`: Defines if the browser is IE 9+. 
* `.ie-gt-9` and `.no-ie-gt-9`: Defines if the browser is IE 10+. 
* `.ie-lt-7` and `.no-ie-lt-7`: Defines if the browser is less than IE 7. 
* `.ie-lt-8` and `.no-ie-lt-8`: Defines if the browser is less than IE 8. 
* `.ie-lt-9` and `.no-ie-lt-9`: Defines if the browser is less than IE 9. 
* `.ie-lt-10` and `.no-ie-lt-10`: Defines if the browser is less than IE 10. 

### Limitations on this release

* Microsoft Edge is not detected
* Opera can only be detected from version 8.0+
* Opera Next is detected as Opera-Next not Opera.
* Firefox can only be detected from version 0.8+
* Safari can only be detected from version 3.0+
* Chrome can only be detected from version 1.0+
* Experimental support for KHtml
* Only IE gives version information

### License

MIT license
