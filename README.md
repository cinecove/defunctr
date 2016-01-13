# Defunctr

##### Defunctr is a [Modernizr](http://www.modernizr.com) extension JavaScript library that detects browsers using feature detection for use in HTML5 and CSS3.

> **PRODUCTION USERS:** The master branch is currently in flux as we prepare for the upcoming 2.0 release. If you are looking for the stable release check out the [<i class="icon-folder-open"></i> legacy-1.x branch](./tree/legacy-1.x) for source code and release files.

- [Website](http://github.com/cinecove/defunctr)

## Releases
Releases can by pulled by your package manager, used through our cdn releases, or downloaded precompiled here on github.

#### Package Managers
- [NuGet Package](https://www.nuget.org/packages/Defunctr/)
- [Bower](#)
- [NPM](#)

#### CDN
- [Defunctr CDN](#)

#### Direct Download
- [Releases](./releases)
- [Releases Branch](./tree/dist)

## Getting Started
To build Defunctr make sure you have `git`, `node`, and `npm` installed.

1. Clone this repository locally.
2. Execute `npm install` from the root directory of the repository.
3. The compiled files will be built in the `build` directory.

## How Defunctr Works
Defunctr detects which browser is visiting your site by detecting feature sets the browser supports. The purpose is to allow UX changes where a change must be made explicitly to an older browser. Using user-agent detection easily fails and apply browser hacks do not work in all cases. Defunctr makes this detection available in two ways: as properties on a global `Defunctr` object, and as classes on the `<html>` element. This information allows you to enhance your pages with a granular level of control.

Defunctr has the ability to exclude testing and tagging by appending any of the following classes to your pages `<html>` element:

* `defunctr-ie-only`: Defunctr will only include ie testing
* `defunctr-version-off`: Defunctr will not add browser version classes to the `<head>` element
* `defunctr-lt-off`: Defunctr will not add less than version classes to the `<head>` elememnt
* `defunctr-gt-off`: Defunctr will not add greater than version classes to the `<head>` element

#### Classes created by Defunctr

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

## Contributing

If Defunctr sparks your interest, don’t hesitate to send a pull request, send a suggestion, file a bug, or just ask a question. We promise we’ll be nice. Just don’t forget to check out our [CONTRIBUTING](CONTRIBUTING.md) doc – it includes few technical details that will make the process a lot smoother.

## Browser Support

We support most browsers, which is the point of using our module in the first place :-)

* Internet Explorer 5+
* Firefox 0.8+
* Chrome 1+
* Safari 3+
* Opera 8+ (including Opera Next)
* Khtml (experimental)

#### Limitations on this release

* Microsoft Edge is not detected
* Opera Next is detected as Opera-Next not Opera.
* Experimental support for KHtml
* Only IE gives version information

## License

Defunctr is licensed under the [MIT license](./LICENSE.md)
