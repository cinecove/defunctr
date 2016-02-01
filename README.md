
# [Defunctr](http://github.com/cinecove/defunctr) ![Github version](https://img.shields.io/github/release/cinecove/defunctr.svg?label=Current%20Version)

##### Defunctr is a [Modernizr](http://www.modernizr.com) extension JavaScript library that detects browsers using feature detection for use in HTML5 and CSS3.

| Package Manager | Current Release and Statistics |
| ------- | ---------------------------|
|[CDN](#cdn-delivery)|[jsDelivr](http://www.jsdelivr.com/projects/defunctr)|
|[NuGet](https://www.nuget.org/packages/Defunctr/)| [![NuGet version](https://img.shields.io/nuget/v/defunctr.svg?label=current%20version)](https://www.nuget.org/packages/defunctr)   [![NuGet version](https://img.shields.io/nuget/dt/defunctr.svg?label=downloads)](https://www.nuget.org/packages/defunctr)|
|[Bower](#bower)| ![Bower version](https://img.shields.io/bower/v/defunctr.svg?label=current%20version) |
|[NPM](#npm)| [![npm version](https://img.shields.io/npm/v/defunctr.svg?label=current%20version)](https://www.npmjs.com/package/defunctr) **Coming Soon**|
|[Ruby Gem](#ruby-gem)| ![Gem version](https://img.shields.io/gem/v/defunctr.svg?label=current%20version) **Coming Soon** |

Defunctr detects which browser is visiting your site by detecting feature sets the browser supports. The purpose is to allow UX changes where a change must be made explicitly to an older browser. Using
user-agent detection easily fails and apply browser hacks do not work in all cases. Defunctr makes this detection available in two ways: as properties on a global `defunctr` object, and as classes on the
`<html>` element. This information allows you to enhance your pages with a granular level of control.

Defunctr has the ability to exclude testing and tagging by appending any of the following classes to your pages `<html>` element:

| CSS Class | Description |
| ------- | ---------------------------|
|`defunctr-ie-only`|Defunctr will only include ie testing|
|`defunctr-version-off`|Defunctr will not add browser version classes to the `<head>` element|
|`defunctr-lt-off`|Defunctr will not add less than version classes to the `<head>` element|
|`defunctr-gt-off`|Defunctr will not add greater than version classes to the `<head>` element|
    
### Classes created by Defunctr

Defunctr will assign a series of tests to Modernizr to execute. Modernizr will apply class names to the `<html>` element based on the results of the test. The class name will be appended with `no-` if the test result is false.

Assume you had a css class definition called button that will style a gradient background with a rounded border.

``` css
	.button {
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		border-radius: 6px;
		background: #1e5799;
		background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
		background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
		background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
	}
```

Now we want a special condition for Internet Explorer version below 10.

``` css

	.button {
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		border-radius: 6px;
		background: #1e5799;
		background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
		background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
		background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
	}
	
	.ie-lt-10 .button {
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 );
	}
```
Now we need to hack the border radius for Internet Explorer 8 and below, and Opera below 10:

``` css

	.button {
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		border-radius: 6px;
		background: #1e5799;
		background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);
		background: -webkit-linear-gradient(top, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
		background: linear-gradient(to bottom, #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%);
	}
	
	.ie-lt-10 .button {
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 );
	}

	.ie-lt-9 .button {
		position: relative;
		behavior: url(/css/border-radius.htc);
		zoom: 1;
	}
	.opera .button {
		... render in svg ...
	}
```

While Modernizr provides some really useful tests, sometimes we want to know the foundation we are working against to creatively hack a feature to render. This is the purpose of Defunctr.

#### Browser Type Tests

The browser  type tests detect the browser that is running without using any information set in the user-agent string.

| CSS Class | Description |
| ------- | ---------------------------|
|`undetected-browser`|Defines if Defunctr is unable to detect the browser.|
|`ie`|Defines if the browser is Internet Explorer. This feature is always on.|
|`edge`|Defines if the browser is Microsoft Edge. (Edge is Not and IE Browser)|
|`chrome`|Defines if the browser is Chrome.|
|`safari`|Defines if the browser is Safari.|
|`webkit`|Defines if the browser is Webkit including Chrome, Safari, and Opera Next.|
|`firefox`|Defines if the browser is Firefox.|
|`opera`|Defines if the browser is Opera (non-webkit).|
|`opera-next`|Defines if the browser is Opera Next (webkit).|

#### Internet Explorer Version Tests

The greater than tests allow you to detect if the current Internet Explorer is **running** as a specific version.

| CSS Class | Description |
| ------- | ---------------------------|
|`ie-version-7`|Defines if the browser is IE 7.|
|`ie-version-8`|Defines if the browser is IE 8.|
|`ie-version-9`|Defines if the browser is IE 9.|
|`ie-version-10`|Defines if the browser is IE 10.|
|`ie-version-11`|Defines if the browser is IE 11.|
|`ie-version-12`|Defines if the browser is IE12.|

#### Internet Explorer Version (Less Than) Tests

The greater than tests allow you to detect if the current Internet Explorer is **running** below a specific version.

| CSS Class | Description |
| ------- | ---------------------------|
|`ie-gt-6`|Defines if the browser is IE 7+.|
|`ie-gt-7`|Defines if the browser is IE 8+.|
|`ie-gt-8`|Defines if the browser is IE 9+.|
|`ie-gt-9`|Defines if the browser is IE 10+.|
|`ie-gt-10`|Defines if the browser is IE 11+.|
|`ie-gt-11`|Defines if the browser is IE 12+.|

#### Internet Explorer Version (Greater Than) Tests

The greater than tests allow you to detect if the current Internet Explorer is **running** above a specific version.

| CSS Class | Description |
| ------- | ---------------------------|
|`ie-lt-7`|Defines if the browser is less than IE 7.|
|`ie-lt-8`|Defines if the browser is less than IE 8.|
|`ie-lt-9`|Defines if the browser is less than IE 9.|
|`ie-lt-10`|Defines if the browser is less than IE 10.|
|`ie-lt-11`|Defines if the browser is less than IE 11.|
|`ie-lt-12`|Defines if the browser is less than IE 12.|

### Browser Support

We support most browsers, which is the point of using our module in the first place :-)

* Internet Explorer 5+
* Edge
* Firefox 0.8+
* Chrome 1+
* Safari 3+
* Opera 8+ (including Opera Next)
* Khtml (experimental)

#### Things to know about this release

* Microsoft Edge is detected as Microsoft Edge not Internet Explorer.
* Opera Next is detected as Opera-Next not Opera.
* Experimental support for KHtml.
* Only Internet Explorer is supported for version information.

### CDN Delivery

> **Help Us Get On CDNJS**:
> 
> We would like to add CDNJS to our list in the future. CDNJS requires a github project star rating above 100. If you would like to see Defunctr hosted there, please contribute by starring this project.

Defunctr is available on the [jsDelivr](http://www.jsdelivr.com/projects/defunctr) content delivery network.

To use Defunctr via jsDelivr add the following script to your html (replace the version with the one you wish to use). Be sure to add Modernizr before you add Defunctr.

``` html
	...
	<body>
		...
		
		<script type="text/javascript" src="//cdn.jsdelivr.net/modernizr/2.8.3/modernizr.min.js"></script>
		<script type="text/javascript" src="//cdn.jsdelivr.net/defunctr/{version}/defunctr.min.js"></script>
	</body>
	...
```

####Version aliasing with jsDelivr

For latest version use:

`//cdn.jsdelivr.net/defunctr/latest/defunctr.min.js`

You can also load versions per branch:

`//cdn.jsdelivr.net/defunctr/1.2.1/defunctr.min.js` Exact 1.2.1 branch

`//cdn.jsdelivr.net/defunctr/1.2/defunctr.min.js` Latest in 1.2.* branch

`//cdn.jsdelivr.net/defunctr/1/defunctr.min.js` Latest in 1.* branch

### Bower
To Install with [bower](http://bower.io/).

Just run

    $ bower install defunctr

### NPM

> **NOTE:** 
> The NPM release is currently in development and has not been released yet. It will be available shortly.

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

Defunctr is licensed under the [MIT license](./LICENSE.md)


### Project Dashboard

You can see issues, pull requests, backlog items, etc. in the [OneGet Dashboard](https://waffle.io/Cinecove/defunctr)

| Stage | Stats |
| ------- | ---------------------------|
|Pending|[![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=triage&title=Triage)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=Bug&title=Bug)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=Discussion&title=Discussion)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=enhancement&title=New%20Feature)](http://waffle.io/Cinecove/defunctr) |
|Development|[![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=ready&title=Ready%20For%20Dev)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/Cinecove/defunctr)|
|QA|[![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=qa-ready&title=QA%20Ready)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=testing&title=QA%20Testing)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=pull-failed&title=Failed%20QA)](http://waffle.io/Cinecove/defunctr) [![Stories in Progress](https://badge.waffle.io/Cinecove/defunctr.svg?label=pull-ready&title=Passed%20QA)](http://waffle.io/Cinecove/defunctr)|

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

[![Analytics](https://ga-beacon.appspot.com/UA-58610544-5/defunctr/readme.md)](https://github.com/igrigorik/ga-beacon)
