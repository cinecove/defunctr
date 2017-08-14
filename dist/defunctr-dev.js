/*!
 * Defunctr 2.0.0
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2017 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2017-08-14T06:43:44.160Z
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.defunctr = factory());
}(this, (function () { 'use strict';

var htmlElementConstructorCheck = (function (window) {
  return Boolean(window && window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0);
});

var safari = (function (window) {
  return htmlElementConstructorCheck(window);
});


var hasOperaHeader = function hasOperaHeader(window, document) {
  try {
    return 'WebkitTransform' in document.documentElement.style && !!window.opr && !!window.opr.addons;
  } catch (ex) {
    return false;
  }
};

var operaNext = (function (window, document) {
  return hasOperaHeader(window, document);
});

var webKitTransformCheck = (function (document) {
  return Boolean(document && document.documentElement && document.documentElement.style && 'WebkitTransform' in document.documentElement.style);
});

var msWriteProfilerMarkCheck = (function (window) {
  return Boolean(window && typeof window.msWriteProfilerMark !== 'undefined');
});

var installTriggerCheck = (function (window) {
  return Boolean(window && typeof window.InstallTrigger !== 'undefined');
});

var firefox = (function (window) {
  return installTriggerCheck(window);
});

var operaVersionCheck = (function (window) {
  return Boolean(window && window.opera && window.opera.version !== undefined);
});

var opera = (function (window) {
  return operaVersionCheck(window);
});

var webkit = (function (window, document) {
  return webKitTransformCheck(document) && !msWriteProfilerMarkCheck(window) && !firefox(window) && !opera(window);
});

var chrome = (function (window, document) {
  return !safari(window) && !operaNext(window, document) && webkit(window, document);
});

var activeXCheck = (function (window) {
  return Boolean('ActiveXObject' in window);
});

var functionalEventCheck = (function (window) {
  return Boolean(window && window.Event && typeof window.Event === 'function');
});

var edge = (function (window) {
  return !activeXCheck(window) && functionalEventCheck(window) && msWriteProfilerMarkCheck(window);
});

var khtmlMarqueeCheck = (function (document) {
  return Boolean(document && document.documentElement && document.documentElement.style && 'KhtmlMarquee' in document.documentElement.style);
});

var khtml = (function (window, document) {
  return khtmlMarqueeCheck(document) && !safari(window);
});

var ie = (function (window) {
  return activeXCheck(window);
});

var undetected = (function (window, document) {
  return !webkit(window, document) && !ie(window) && !chrome(window, document) && !edge(window) && !firefox(window) && !opera(window) && !operaNext(window, document) && !safari(window);
});


var hasBackCompatCSS1Check = (function (document) {
  return Boolean(document && document.compatMode && (document.compatMode === 'CSS1Compat' || document.compatMode === 'BackCompat'));
});

var isAboveVersion5 = (function (window, document) {
  return ie(window) && hasBackCompatCSS1Check(document);
});

var hasXmlHttpRequestCheck = (function (window) {
  return Boolean(window && typeof window.XMLHttpRequest !== 'undefined');
});

var isAboveVersion6 = (function (window, document) {
  return ie(window) && hasBackCompatCSS1Check(document) && hasXmlHttpRequestCheck(window);
});

var hasQuerySelectorCheck = (function (document) {
  return Boolean(document && typeof document.querySelector !== 'undefined');
});

var isAboveVersion7 = (function (window, document) {
  return ie(window) && hasQuerySelectorCheck(document);
});

var hasAddEventListenerCheck = (function (document) {
  return Boolean(document && typeof document.addEventListener !== 'undefined');
});

var isAboveVersion8 = (function (window, document) {
  return ie(window) && hasAddEventListenerCheck(document);
});

var hasAtobCheck = (function (window) {
  return Boolean(window && typeof window.atob !== 'undefined');
});

var isAboveVersion9 = (function (window) {
  return ie(window) && hasAtobCheck(window);
});

var attachEventCheck = (function (document) {
  return Boolean(document && typeof document.attachEvent !== 'undefined');
});

var isAboveVersion10 = (function (window, document) {
  return ie(window) && hasAtobCheck(window) && !attachEventCheck(document);
});

var isAboveVersion11 = (function (window) {
  return ie(window) && functionalEventCheck(window);
});

var hasCompatModeCheck = (function (document) {
  return Boolean(document && typeof document.compatMode !== 'undefined');
});

var isBelowVersion6 = (function (window, document) {
  return ie(window) && !hasCompatModeCheck(document);
});

var hasBackCompatCheck = (function (document) {
  return Boolean(document && document.compatMode && document.compatMode === 'BackCompat');
});

var isBelowVersion7 = (function (window, document) {
  return ie(window) && !hasBackCompatCheck(document) && !hasXmlHttpRequestCheck(window);
});

var isBelowVersion8 = (function (window, document) {
  return ie(window) && !hasQuerySelectorCheck(document);
});

var isBelowVersion9 = (function (window, document) {
  return ie(window) && !hasAddEventListenerCheck(document);
});

var isBelowVersion10 = (function (window) {
  return ie(window) && !hasAtobCheck(window);
});

var isBelowVersion11 = (function (window, document) {
  return ie(window) && attachEventCheck(document);
});

var isBelowVersion12 = (function (window) {
  return ie(window) && !functionalEventCheck(window);
});

var isVersion6 = (function (window, document) {
  return isAboveVersion5(window, document) && isBelowVersion7(window, document);
});

var isVersion7 = (function (window, document) {
  return isAboveVersion6(window, document) && isBelowVersion8(window, document);
});

var isVersion8 = (function (window, document) {
  return isAboveVersion7(window, document) && isBelowVersion9(window, document);
});

var isVersion9 = (function (window, document) {
  return isAboveVersion8(window, document) && isBelowVersion10(window);
});

var isVersion10 = (function (window, document) {
  return isAboveVersion9(window) && isBelowVersion11(window, document);
});

var isVersion11 = (function (window, document) {
  return isAboveVersion10(window, document) && isBelowVersion12(window);
});



var ie$1 = (Object.freeze || Object)({
	isAboveVersion5: isAboveVersion5,
	isAboveVersion6: isAboveVersion6,
	isAboveVersion7: isAboveVersion7,
	isAboveVersion8: isAboveVersion8,
	isAboveVersion9: isAboveVersion9,
	isAboveVersion10: isAboveVersion10,
	isAboveVersion11: isAboveVersion11,
	isBelowVersion6: isBelowVersion6,
	isBelowVersion7: isBelowVersion7,
	isBelowVersion8: isBelowVersion8,
	isBelowVersion9: isBelowVersion9,
	isBelowVersion10: isBelowVersion10,
	isBelowVersion11: isBelowVersion11,
	isBelowVersion12: isBelowVersion12,
	isVersion6: isVersion6,
	isVersion7: isVersion7,
	isVersion8: isVersion8,
	isVersion9: isVersion9,
	isVersion10: isVersion10,
	isVersion11: isVersion11
});

var hasChromeWebstoreInstallCheck = (function (window) {
  return Boolean(window && window.chrome && window.chrome.webstore && window.chrome.webstore.install);
});

var isAboveVersion15 = (function (window, document) {
  return chrome(window, document) && hasChromeWebstoreInstallCheck(window);
});



var chrome$1 = (Object.freeze || Object)({
	isAboveVersion15: isAboveVersion15
});

var versions = {
  ie: ie$1,
  chrome: chrome$1
};

var detective = (function (window, document) {
  return function () {
    return {
      isWebKit: webkit(window, document),
      isOpera: opera(window),
      isIE: ie(window),
      isFirefox: firefox(window),
      isSafari: safari(window),
      isKhtml: khtml(window, document),
      isOperaNext: operaNext(window, document),
      isChrome: chrome(window, document),
      isEdge: edge(window),
      isUndetected: undetected(window, document),

      standardsCompliant: versions.ie.isAboveVersion9(window) || !ie(window),

      chromeIsAbove15: versions.chrome.isAboveVersion15(window, document),

      ieIsVersion11: versions.ie.isVersion11(window, document),
      ieIsVersion10: versions.ie.isVersion10(window, document),
      ieIsVersion9: versions.ie.isVersion9(window, document),
      ieIsVersion8: versions.ie.isVersion8(window, document),
      ieIsVersion7: versions.ie.isVersion7(window, document),
      ieIsVersion6: versions.ie.isVersion6(window, document),

      ieIsBelowVersion6: versions.ie.isBelowVersion6(window, document),
      ieIsBelowVersion7: versions.ie.isBelowVersion7(window, document),
      ieIsBelowVersion8: versions.ie.isBelowVersion8(window, document),
      ieIsBelowVersion9: versions.ie.isBelowVersion9(window, document),
      ieIsBelowVersion10: versions.ie.isBelowVersion10(window, document),
      ieIsBelowVersion11: versions.ie.isBelowVersion11(window, document),
      ieIsBelowVersion12: versions.ie.isBelowVersion12(window, document),

      ieIsAboveVersion5: versions.ie.isAboveVersion5(window, document),
      ieIsAboveVersion6: versions.ie.isAboveVersion6(window, document),
      ieIsAboveVersion7: versions.ie.isAboveVersion7(window, document),
      ieIsAboveVersion8: versions.ie.isAboveVersion8(window, document),
      ieIsAboveVersion9: versions.ie.isAboveVersion9(window, document),
      ieIsAboveVersion10: versions.ie.isAboveVersion10(window, document),
      ieIsAboveVersion11: versions.ie.isAboveVersion11(window, document)
    };
  };
});

var classes = {
  IE: 'ie',
  CHROME: 'chrome',
  SAFARI: 'safari',
  OPERA: 'opera',
  OPERANEXT: 'opera-next',
  FIREFOX: 'firefox',
  KHTML: 'khtml',
  WEBKIT: 'webkit',
  EDGE: 'edge',
  UNKNOWN: 'undetected-browser',

  IE_LESSTHAN_6: 'ie-lt-6',
  IE_LESSTHAN_7: 'ie-lt-7',
  IE_LESSTHAN_8: 'ie-lt-8',
  IE_LESSTHAN_9: 'ie-lt-9',
  IE_LESSTHAN_10: 'ie-lt-10',
  IE_LESSTHAN_11: 'ie-lt-11',
  IE_LESSTHAN_12: 'ie-lt-12',

  IE_GREATERTHAN_6: 'ie-gt-6',
  IE_GREATERTHAN_7: 'ie-gt-7',
  IE_GREATERTHAN_8: 'ie-gt-8',
  IE_GREATERTHAN_9: 'ie-gt-9',
  IE_GREATERTHAN_10: 'ie-gt-10',
  IE_GREATERTHAN_11: 'ie-gt-11',

  IE_VERSION_6: 'ie-version-6',
  IE_VERSION_7: 'ie-version-7',
  IE_VERSION_8: 'ie-version-8',
  IE_VERSION_9: 'ie-version-9',
  IE_VERSION_10: 'ie-version-10',
  IE_VERSION_11: 'ie-version-11'
};

var prefix = 'defunctr';

var tags = {
  DEFUNCTR: prefix,
  VERSION_OFF: prefix + '-version-off',
  IE_ONLY: prefix + '-ie-only',
  IE_LESSTHAN_OFF: prefix + '-lt-off',
  IE_GREATERTHAN_OFF: prefix + '-gt-off',
  NOTAGGING: prefix + '-off'
};

var prefixedClassForFactory = (function () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (className) {
    return '' + prefix + className;
  };
});

var optionalModernizr = {
  modernizr: undefined
};

var createStub = function createStub(window) {
  if (typeof require === 'function') {
    require(['modernizer'], function (m) {
      optionalModernizr.modernizr = m;
    });
  } else {
    if (window) {
      if (window.Modernizr) {
        optionalModernizr.modernizr = window.Modernizr;
      } else if (window.modernizr) {
        optionalModernizr.modernizr = window.modernizr;
      }
    }
  }
  return optionalModernizr;
};

var optionalModernizr$1 = (function (window) {
  return createStub(window);
});

var extractDocElement = function extractDocElement(document) {
  return document && document.documentElement && document.documentElement.className ? document.documentElement : { className: '' };
};

var hasTag = function hasTag(docElement, tag) {
  return docElement.className.match(new RegExp('\\b' + tag + '\\b'));
};

var removeTag = function removeTag(docElement, tag) {
  docElement.className = docElement.className.replace(new RegExp('\\b' + tag + '\\b'), '');
};

var addTag = function addTag(docElement, tag) {
  if (!hasTag(docElement, tag)) {
    docElement.className += docElement.className.length > 0 ? ' ' + tag : '';
  }
};

var cleanTags = function cleanTags(docElement) {
  removeTag(docElement, tags.IE_GREATERTHAN_OFF);
  removeTag(docElement, tags.IE_LESSTHAN_OFF);
  removeTag(docElement, tags.VERSION_OFF);
  removeTag(docElement, tags.IE_ONLY);
  removeTag(docElement, tags.DEFUNCTR);
  removeTag(docElement, tags.NOTAGGING);
};

var makeTest = function makeTest(item) {
  return function () {
    return item;
  };
};

var test = function test(docElement, modernizr) {
  return function (key, test) {
    if (modernizr) {
      modernizr.addTest(key, test);
    } else {
      if (test()) {
        addTag(docElement, key);
      } else {
        addTag(docElement, 'no-' + key);
      }
    }
  };
};

var tagPage = function tagPage(detective, document, modernizr) {
  var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var docElement = extractDocElement(document);
  var tester = test(docElement, modernizr);
  var prefixedClassFor = prefixedClassForFactory(prefix);
  if (!hasTag(docElement, tags.NOTAGGING)) {
    tester(prefixedClassFor(classes.IE), makeTest(detective.isIE));
    if (!hasTag(docElement, tags.IE_ONLY)) {
      tester(prefixedClassFor(classes.CHROME), makeTest(detective.isChrome));
      tester(prefixedClassFor(classes.SAFARI), makeTest(detective.isSafari));
      tester(prefixedClassFor(classes.OPERA), makeTest(detective.isOpera));
      tester(prefixedClassFor(classes.OPERANEXT), makeTest(detective.isOperaNext));
      tester(prefixedClassFor(classes.FIREFOX), makeTest(detective.isFirefox));
      tester(prefixedClassFor(classes.KHTML), makeTest(detective.isKhtml));
      tester(prefixedClassFor(classes.WEBKIT), makeTest(detective.isWebKit));
      tester(prefixedClassFor(classes.EDGE), makeTest(detective.isEdge));
      tester(prefixedClassFor(classes.UNKNOWN), makeTest(detective.isUndetected));
    }

    if (!hasTag(docElement, tags.IE_LESSTHAN_OFF)) {
      tester(prefixedClassFor(classes.IE_LESSTHAN_6), makeTest(detective.ieIsBelowVersion6));
      tester(prefixedClassFor(classes.IE_LESSTHAN_7), makeTest(detective.ieIsBelowVersion7));
      tester(prefixedClassFor(classes.IE_LESSTHAN_8), makeTest(detective.ieIsBelowVersion8));
      tester(prefixedClassFor(classes.IE_LESSTHAN_9), makeTest(detective.ieIsBelowVersion9));
      tester(prefixedClassFor(classes.IE_LESSTHAN_10), makeTest(detective.ieIsBelowVersion10));
      tester(prefixedClassFor(classes.IE_LESSTHAN_11), makeTest(detective.ieIsBelowVersion11));
      tester(prefixedClassFor(classes.IE_LESSTHAN_12), makeTest(detective.ieIsBelowVersion12));
    }

    if (!hasTag(docElement, tags.IE_GREATERTHAN_OFF)) {
      tester(prefixedClassFor(classes.IE_GREATERTHAN_6), makeTest(detective.ieIsAboveVersion6));
      tester(prefixedClassFor(classes.IE_GREATERTHAN_7), makeTest(detective.ieIsAboveVersion7));
      tester(prefixedClassFor(classes.IE_GREATERTHAN_8), makeTest(detective.ieIsAboveVersion8));
      tester(prefixedClassFor(classes.IE_GREATERTHAN_9), makeTest(detective.ieIsAboveVersion9));
      tester(prefixedClassFor(classes.IE_GREATERTHAN_10), makeTest(detective.ieIsAboveVersion10));
      tester(prefixedClassFor(classes.IE_GREATERTHAN_11), makeTest(detective.ieIsAboveVersion11));
    }

    if (!hasTag(docElement, tags.VERSION_OFF)) {
      tester(prefixedClassFor(classes.IE_VERSION_6), makeTest(detective.ieIsVersion6));
      tester(prefixedClassFor(classes.IE_VERSION_7), makeTest(detective.ieIsVersion7));
      tester(prefixedClassFor(classes.IE_VERSION_8), makeTest(detective.ieIsVersion8));
      tester(prefixedClassFor(classes.IE_VERSION_9), makeTest(detective.ieIsVersion9));
      tester(prefixedClassFor(classes.IE_VERSION_10), makeTest(detective.ieIsVersion10));
      tester(prefixedClassFor(classes.IE_VERSION_11), makeTest(detective.ieIsVersion11));
    }

    cleanTags(docElement);
  }
};

var tagger = (function (detective, window, document) {
  return {
    tag: function tag() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (document) {
        var d = detective();
        tagPage(d, document, optionalModernizr$1(window).modernizr, prefix);
      }
    }
  };
});

var mapVendor = function mapVendor(detector) {
	if (detector.isIE) {
		return 'ie';
	}
	if (detector.isOpera || detector.isOperaNext) {
		return 'opera';
	}
	if (detector.isChrome) {
		return 'chrome';
	}
	if (detector.isEdge) {
		return 'edge';
	}
	if (detector.isSafari) {
		return 'safari';
	}
	if (detector.isFirefox) {
		return 'firefox';
	}
	if (detector.isKhtml) {
		return 'khtml';
	}
	return 'unknown';
};

var mapVersion = function mapVersion(detector) {
	if (detector.isIE) {
		if (detector.ieIsBelowVersion6) {
			return 5;
		}
		if (detector.ieIsVersion6) {
			return 6;
		}
		if (detector.ieIsVersion7) {
			return 7;
		}
		if (detector.ieIsVersion8) {
			return 8;
		}
		if (detector.ieIsVersion9) {
			return 9;
		}
		if (detector.ieIsVersion10) {
			return 10;
		}
		if (detector.ieIsVersion11) {
			return 11;
		}
		if (detector.ieIsAboveVersion11) {
			return 12;
		}
	}
	return 0;
};

var browser = (function (detector) {
	return function () {
		var d = detector();
		return {
			vendor: mapVendor(d),
			webkit: d.isWebKit,
			detected: !d.isUndetected,
			version: mapVersion(d),
			standards: d.standardsCompliant
		};
	};
});



var defunctr = (function (window) {
  var w = window;
  var d = window && window.document ? window.document : undefined;
  var det = detective(w, d);
  var t = tagger(det, w, d);

  var defunctr = {
    version: '2.0.0',
    name: 'defunctr',
    tag: t.tag,
    browser: browser(det)
  };

  return defunctr;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};


var autoload = (function (defunctr, window ) {
	if (window) {
		var autoloader = defunctr(window);
		autoloader.tag('');
		window.defunctr = autoloader;
		if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
			return defunctr;
		}
		return autoloader;
	}
});


var index = autoload(defunctr, window, console);

return index;

})));
