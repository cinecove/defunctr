
# Defunctr
![Github version](https://img.shields.io/github/release/cinecove/defunctr.svg) ![Bower version](https://img.shields.io/bower/v/defunctr.svg)  [![NuGet version](https://img.shields.io/nuget/v/defunctr.svg)](https://www.nuget.org/packages/defunctr)  ![Gem version](https://img.shields.io/gem/v/defunctr.svg) [![npm version](https://img.shields.io/npm/v/defunctr.svg)](https://www.npmjs.com/package/defunctr)

##### Defunctr is a [Modernizr](http://www.modernizr.com) extension JavaScript library that detects browsers using feature detection for use in HTML5 and CSS3.

- [Website](http://github.com/cinecove/defunctr)
- [NuGet Package](https://www.nuget.org/packages/Defunctr/) [![NuGet version](https://img.shields.io/nuget/dt/defunctr.svg?label=downloads)](https://www.nuget.org/packages/defunctr) 
- [Bower](#bower)
- [NPM](#npm)

Defunctr detects which browser is visiting your site by detecting feature sets the browser supports. The purpose is to allow UX changes where a change must be made explicitly to an older browser. Using
user-agent detection easily fails and apply browser hacks do not work in all cases. Defunctr makes this detection available in two ways: as properties on a global `defunctr` object, and as classes on the
`<html>` element. This information allows you to enhance your pages with a granular level of control.

Defunctr has the ability to exclude testing and tagging by appending any of the following classes to your pages `<html>` element:

* `defunctr-ie-only`: Defunctr will only include ie testing
* `defunctr-version-off`: Defunctr will not add browser version classes to the `<head>` element
* `defunctr-lt-off`: Defunctr will not add less than version classes to the `<head>` elememnt
* `defunctr-gt-off`: Defunctr will not add greater than version classes to the `<head>` element
    
### Classes created by Defunctr

* `.undetected-browser` or `.no-undetected-browser`: Defines if Defunctr is unable to detect the browser.
* `.ie` or `.no-ie`: Defines if the browser is Internet Explorer. This feature is always on.
* `.edge` or `.no-edge`: Defines if the browser is Microsoft Edge. (Edge is Not and IE Browser)
* `.chrome` or `.no-chrome`: Defines if the browser is Chrome. 
* `.safari` or `.no-safari`: Defines if the browser is Safari. 
* `.webkit` or `.no-webkit`: Defines if the browser is Webkit including Chrome, Safari, and Opera Next. 
* `.firefox` or `.no-firefox`: Defines if the browser is Firefox. 
* `.opera` or `.no-opera`: Defines if the browser is Opera (non-webkit). 
*  `.opera-next` or `.no-opera-next`: Defines if the browser is Opera Next (webkit). 
* `.ie-version-7` and `.no-ie-version-7`: Defines if the browser is IE 7. 
* `.ie-version-8` and `.no-ie-version-8`: Defines if the browser is IE 8. 
* `.ie-version-9` and `.no-ie-version-9`: Defines if the browser is IE 9. 
* `.ie-version-10` and `.no-ie-version-10`: Defines if the browser is IE 10.
* `.ie-version-11` and `.no-ie-version-11`: Defines if the browser is IE 11.
* `.ie-version-12` and `.no-ie-version-12`: Defines if the browser is IE12.
* `.ie-gt-6` and `.no-ie-gt-6`: Defines if the browser is IE 7+. 
* `.ie-gt-7` and `.no-ie-gt-7`: Defines if the browser is IE 8+. 
* `.ie-gt-8` and `.no-ie-gt-8`: Defines if the browser is IE 9+. 
* `.ie-gt-9` and `.no-ie-gt-9`: Defines if the browser is IE 10+. 
* `.ie-gt-10` and `.no-ie-gt-10`: Defines if the browser is IE 11+.
* `.ie-gt-11` and `.no-ie-gt-11`: Defines if the browser is IE 12+.
* `.ie-lt-7` and `.no-ie-lt-7`: Defines if the browser is less than IE 7. 
* `.ie-lt-8` and `.no-ie-lt-8`: Defines if the browser is less than IE 8. 
* `.ie-lt-9` and `.no-ie-lt-9`: Defines if the browser is less than IE 9. 
* `.ie-lt-10` and `.no-ie-lt-10`: Defines if the browser is less than IE 10. 
* `.ie-lt-11` and `.no-ie-lt-11`: Defines if the browser is less than IE 11.
* `.ie-lt-12` and `.no-ie-lt-12`: Defines if the browser is less than IE 12.

### Things to know about this release

* Internet Explorer can only be detected from version 5.0+
* Microsoft Edge is detected as Microsoft Edge not Internet Explorer.
* Opera can only be detected from version 8.0+
* Opera Next is detected as Opera-Next not Opera.
* Firefox can only be detected from version 0.8+
* Safari can only be detected from version 3.0+
* Chrome can only be detected from version 1.0+
* Experimental support for KHtml.
* Only Internet Explorer is supported for version information.

### Bower
To Install with [bower](http://bower.io/).

Just run

    $ bower install defunctr

### NPM
To Install with [npm](https://www.npmjs.com/).

Just run

    $ npm install defunctr

### Building the code

#### Required Tools
- Node
- NPM
- Grunt

#### Optional Tools
- [WebStorm](http://jetbrains.com/webstorm) (Project Editor)

check out the source code 
``` bash

#create your project directory
$ mkdir defunctr

#clone this repository
$ git clone https://github.com/Cinecove/defunctr.git .

# BUILD using npm and grunt:
$ npm install
    
# If you want to send us changes, you should fork 
# the project into your own account first, and use 
# that URL to clone it.

# If you fork it later you can just change the origin by:

# move the old origin out of the way. You could delete it if you want.
$ git remote rename origin upstream

# add your repo url as the origin:
# e.g. git@github.com:victoriafrench/defunctr.git 
$ git remote add origin <your-repo-url> 

# the compiled modules are located in the release directory.
# tests are located in the tests directory and reference the
# release directory
 
$ cd release

```

### License

This project is licensed under the MIT license.

### Project Dashboard

You can see issues, pull requests, backlog items, etc. in the [OneGet Dashboard](https://waffle.io/Cinecove/defunctr)

[![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=triage&title=Triage)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=Bug&title=Bug)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=Discussion&title=Discussion)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=enhansement&title=New%20Feature)](http://waffle.io/Cinecove/defunctr) 

[![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=ready&title=Ready%20For%20Dev)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/Cinecove/defunctr)

[![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=qa%20ready&title=QA%20Ready)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=testing&title=QA%20Testing)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=pull%20failed&title=Failed%20QA)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=pull%20ready&title=Passed%20QA)](http://waffle.io/Cinecove/defunctr)

Throughput Graph

[![Throughput Graph](https://graphs.waffle.io/Cinecove/defunctr/throughput.svg)](https://waffle.io/Cinecove/defunctr/metrics)


#### Branches

There are currently three branches in the git repository:

| Branch/Tag | Purpose |
| ------- | ---------------------------|
|`master`|  The `master` branch is where the daily builds are made from.  |
|`v*`|  The `v*` tags are to mark each release. Older builds used `release/v*`. |
|`feature/*`|  The `feature/*` branch is where the current **unstable** and **not-likely-working** coding is taking place that is being shared across forks. |
|`legacy-1.x`|  The `legacy-1.x` branch the original master before the project went into a build process. It is no longer used and will be deleted in the future. |
|`dist`|  The `dist` branch the original distribution branch before npm and bower releases were introduced. This branch will be deleted. |



### Team Members 

| Branch | Purpose |
| ------- | ---------------------------|
|@cinecove|  Project sponsor and administrator |
|@victoriafrench|  Program Manager on Defunctr and original developer/creator.   |

### Special Thanks

We would like to give a shout-out to **JetBrains** for providing [WebStorm](https://www.jetbrains.com/webstorm/) licenses to our project! Big Huge Hugs!
