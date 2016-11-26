/*!
 * Defunctr 1.3.0-beta1
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2016 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2016-11-26T00:26:40.944Z
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('modernizr')) :
  typeof define === 'function' && define.amd ? define(['modernizr'], factory) :
  (global.defunctr = factory(global.Modernizr));
}(this, (function (Modernizr) { 'use strict';

Modernizr = 'default' in Modernizr ? Modernizr['default'] : Modernizr;

var browserWindow = window || null;
var browserNavigator = navigator || null;
var browserDocument = browserWindow ? browserWindow.document || null : null;
var undef = void 0;

var noop = function noop() {};
var console = browserWindow && browserWindow.console ? browserWindow.console : undefined;
var log = console ? console.log || noop : noop;
var warn = console ? console.warn || log : noop;
var error$1 = console ? console.error || log : noop;

var logger = {
  log: log,
  warn: warn,
  error: error$1
};

var htmlElementConstructorCheck = function () {
  return Boolean(browserWindow && browserWindow.HTMLElement && Object.prototype.toString.call(browserWindow.HTMLElement).indexOf('Constructor') > 0);
};

var safari = function () {
  return htmlElementConstructorCheck();
};

var webKitTransformCheck = function () {
  return Boolean(browserDocument && browserDocument.documentElement && browserDocument.documentElement.style && 'WebkitTransform' in browserDocument.documentElement.style);
};

var msWriteProfilerMarkCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.msWriteProfilerMark !== 'undefined');
};

var webkit = function () {
  return webKitTransformCheck() && msWriteProfilerMarkCheck() === false;
};


function hasOperaHeader() {
  return Boolean(browserNavigator && browserNavigator.userAgent && /(Opera|OPR)/.test(browserNavigator.userAgent));
}

var operaNext = function () {
  return webkit() && hasOperaHeader();
};

var chrome = function () {
  return !safari() && !operaNext() && webkit();
};

var activeXCheck = function () {
  return 'ActiveXObject' in browserWindow;
};

var functionalEventCheck = function () {
  return Boolean(browserWindow && browserWindow.Event && typeof browserWindow.Event === 'function');
};

var edge = function () {
  return Boolean(!activeXCheck() && functionalEventCheck() && msWriteProfilerMarkCheck());
};

var mozBoxSizingCheck = function () {
  return Boolean(browserDocument && browserDocument.documentElement && browserDocument.documentElement.style && 'MozBoxSizing' in browserDocument.documentElement.style);
};

var firefox = function () {
  return mozBoxSizingCheck();
};

var khtmlMarqueeCheck = function () {
  return Boolean(browserDocument && browserDocument.documentElement && browserDocument.documentElement.style && 'KhtmlMarquee' in browserDocument.documentElement.style);
};

var khtml = function () {
  return khtmlMarqueeCheck();
};

var operaVersionCheck = function () {
  return Boolean(browserWindow && browserWindow.opera && browserWindow.opera.version !== undef);
};

var opera = function () {
  return operaVersionCheck();
};



var ie = function () {
  return activeXCheck();
};

var undetected = function () {
  return !webkit() && !ie() && !chrome() && !edge() && !firefox() && !opera() && !operaNext() && !safari();
};

var hasXmlHttpRequestCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.XMLHttpRequest !== 'undefined');
};

var hasBackCompatCheck = function () {
  return Boolean(browserDocument && browserDocument.compatMode && browserDocument.compatMode === 'BackCompat');
};

var isAboveVersion6 = function () {
  return ie() && hasBackCompatCheck() && !hasXmlHttpRequestCheck();
};

var hasQuerySelectorCheck = function () {
  return Boolean(browserDocument && browserDocument.querySelector !== 'undefined');
};

var isAboveVersion7 = function () {
  return ie() && hasQuerySelectorCheck();
};

var hasAddEventListenerCheck = function () {
  return Boolean(browserDocument && browserDocument.addEventListener !== 'undefined');
};

var isAboveVersion8 = function () {
  return ie() && hasAddEventListenerCheck();
};

var hasAtobCheck = function () {
  return Boolean(browserWindow && typeof browserWindow.atob !== 'undefined');
};

var isAboveVersion9 = function () {
  return ie() && hasAtobCheck();
};

var isAboveVersion10 = function () {
  return ie() && hasAtobCheck() && !activeXCheck();
};

var isAboveVersion11 = function () {
  return ie() && functionalEventCheck();
};

var hasCompatModeCheck = function () {
  return Boolean(browserDocument && typeof browserDocument.compatMode !== 'undefined');
};

var isBelowVersion6 = function () {
  return ie() && (!hasCompatModeCheck() || hasBackCompatCheck());
};

var isBelowVersion7 = function () {
  return ie() && !hasBackCompatCheck() && !hasXmlHttpRequestCheck();
};

var isBelowVersion8 = function () {
  return ie() && !hasQuerySelectorCheck();
};

var isBelowVersion9 = function () {
  return ie() && !hasAddEventListenerCheck();
};

var isBelowVersion10 = function () {
  return ie() && !hasAtobCheck();
};

var isBelowVersion11 = function () {
  return ie() && !hasAtobCheck() && activeXCheck();
};

var isBelowVersion12 = function () {
  return ie() && !functionalEventCheck();
};

var isAboveVersion5 = function () {
  return ie() && hasBackCompatCheck();
};

var isVersion6 = function () {
  return isAboveVersion5() && isBelowVersion7();
};

var isVersion7 = function () {
  return isAboveVersion6() && isBelowVersion8();
};

var isVersion8 = function () {
  return isAboveVersion7() && isBelowVersion9();
};

var isVersion9 = function () {
  return isAboveVersion8() && isBelowVersion10();
};

var isVersion10 = function () {
  return isAboveVersion9() && isBelowVersion11();
};

var isVersion11 = function () {
  return isAboveVersion10() && isBelowVersion12();
};



var ie$1 = Object.freeze({
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

var hasChromeWebstoreInstallCheck = function () {
  return Boolean(browserWindow && browserWindow.chrome && browserWindow.chrome.webstore && browserWindow.chrome.webstore.install);
};

var isAboveVersion15 = function () {
  return chrome() && hasChromeWebstoreInstallCheck();
};



var chrome$1 = Object.freeze({
	isAboveVersion15: isAboveVersion15
});

var versions = {
  ie: ie$1,
  chrome: chrome$1
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var Detective = function () {
  function Detective() {
    classCallCheck(this, Detective);
  }

  createClass(Detective, [{
    key: 'isWebKit',
    get: function get() {
      return webkit();
    }
  }, {
    key: 'isOpera',
    get: function get() {
      return opera();
    }
  }, {
    key: 'isIE',
    get: function get() {
      return ie();
    }
  }, {
    key: 'isFirefox',
    get: function get() {
      return firefox();
    }
  }, {
    key: 'isSafari',
    get: function get() {
      return safari();
    }
  }, {
    key: 'isKhtml',
    get: function get() {
      return khtml();
    }
  }, {
    key: 'isOperaNext',
    get: function get() {
      return operaNext();
    }
  }, {
    key: 'isChrome',
    get: function get() {
      return chrome();
    }
  }, {
    key: 'isEdge',
    get: function get() {
      return edge();
    }
  }, {
    key: 'isUndetected',
    get: function get() {
      return undetected();
    }
  }, {
    key: 'standardsCompliant',
    get: function get() {
      return versions.ie.isAboveVersion9() || !ie();
    }
  }, {
    key: 'chromeIsAbove15',
    get: function get() {
      return versions.chrome.isAboveVersion15();
    }
  }, {
    key: 'ieIsVersion11',
    get: function get() {
      return versions.ie.isVersion11();
    }
  }, {
    key: 'ieIsVersion10',
    get: function get() {
      return versions.ie.isVersion10();
    }
  }, {
    key: 'ieIsVersion9',
    get: function get() {
      return versions.ie.isVersion9();
    }
  }, {
    key: 'ieIsVersion8',
    get: function get() {
      return versions.ie.isVersion8();
    }
  }, {
    key: 'ieIsVersion7',
    get: function get() {
      return versions.ie.isVersion7();
    }
  }, {
    key: 'ieIsVersion6',
    get: function get() {
      return versions.ie.isVersion6();
    }
  }, {
    key: 'ieIsBelowVersion6',
    get: function get() {
      return versions.ie.isBelowVersion6();
    }
  }, {
    key: 'ieIsBelowVersion7',
    get: function get() {
      return versions.ie.isBelowVersion7();
    }
  }, {
    key: 'ieIsBelowVersion8',
    get: function get() {
      return versions.ie.isBelowVersion8();
    }
  }, {
    key: 'ieIsBelowVersion9',
    get: function get() {
      return versions.ie.isBelowVersion9();
    }
  }, {
    key: 'ieIsBelowVersion10',
    get: function get() {
      return versions.ie.isBelowVersion10();
    }
  }, {
    key: 'ieIsBelowVersion11',
    get: function get() {
      return versions.ie.isBelowVersion11();
    }
  }, {
    key: 'ieIsBelowVersion12',
    get: function get() {
      return versions.ie.isBelowVersion12();
    }
  }, {
    key: 'ieIsAboveVersion5',
    get: function get() {
      return versions.ie.isAboveVersion5();
    }
  }, {
    key: 'ieIsAboveVersion6',
    get: function get() {
      return versions.ie.isAboveVersion6();
    }
  }, {
    key: 'ieIsAboveVersion7',
    get: function get() {
      return versions.ie.isAboveVersion7();
    }
  }, {
    key: 'ieIsAboveVersion8',
    get: function get() {
      return versions.ie.isAboveVersion8();
    }
  }, {
    key: 'ieIsAboveVersion9',
    get: function get() {
      return versions.ie.isAboveVersion9();
    }
  }, {
    key: 'ieIsAboveVersion10',
    get: function get() {
      return versions.ie.isAboveVersion10();
    }
  }, {
    key: 'ieIsAboveVersion11',
    get: function get() {
      return versions.ie.isAboveVersion11();
    }
  }]);
  return Detective;
}();

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

  IE_VERSION_6: 'ie-verion-6',
  IE_VERSION_7: 'ie-version-7',
  IE_VERSION_8: 'ie-version-8',
  IE_VERSION_9: 'ie-version-9',
  IE_VERSION_10: 'ie-version-10',
  IE_VERSION_11: 'ie-version-11'
};

var tags = {
  DEFUNCTR: 'defunctr',
  VERSION_OFF: 'defunctr-version-off',
  IE_ONLY: 'defunctr-ie-only',
  IE_LESSTHAN_OFF: 'defunctr-lt-off',
  IE_GREATERTHAN_OFF: 'defunctr-gt-off',
  NOTAGGING: 'defunctr-off'
};

var prefix = '';

var prefixedClassFor = function (className) {
  return '' + prefix + className;
};

var docElement = browserDocument && browserDocument.documentElement && browserDocument.documentElement.className ? browserDocument.documentElement : { className: '' };

function makeTest(item) {
  return function test() {
    return item;
  };
}

function test(key, test) {
  if (Modernizr) {
    Modernizr.addTest(key, test);
  } else {
    if (test()) {
      addTag(key);
    } else {
      addTag('no-' + key);
    }
  }
}

function removeTag(tag) {
  docElement.className = docElement.className.replace(new RegExp('\\b' + tag + '\\b'), '');
}

function addTag(tag) {
  if (!hasTag(tag)) {
    docElement.className += docElement.className.length > 0 ? ' ' + tag : tag;
  }
}

function hasTag(tag) {
  return docElement.className.match(new RegExp('\\b' + tag + '\\b'));
}

function tagPage(detective) {
  if (!hasTag(tags.NOTAGGING)) {
    test(prefixedClassFor(classes.IE), makeTest(detective.isIE));

    if (!hasTag(tags.IE_ONLY)) {
      test(prefixedClassFor(classes.CHROME), makeTest(detective.isChrome));
      test(prefixedClassFor(classes.SAFARI), makeTest(detective.isSafari));
      test(prefixedClassFor(classes.OPERA), makeTest(detective.isOpera));
      test(prefixedClassFor(classes.OPERANEXT), makeTest(detective.isOperaNext));
      test(prefixedClassFor(classes.FIREFOX), makeTest(detective.isFirefox));
      test(prefixedClassFor(classes.KHTML), makeTest(detective.isKhtml));
      test(prefixedClassFor(classes.WEBKIT), makeTest(detective.isWebKit));
      test(prefixedClassFor(classes.EDGE), makeTest(detective.isEdge));
      test(prefixedClassFor(classes.UNKNOWN), makeTest(detective.isUndetected));
    }

    if (!hasTag(tags.IE_LESSTHAN_OFF)) {
      test(prefixedClassFor(classes.IE_LESSTHAN_6), makeTest(detective.ieBelowVersion6));
      test(prefixedClassFor(classes.IE_LESSTHAN_7), makeTest(detective.ieBelowVersion7));
      test(prefixedClassFor(classes.IE_LESSTHAN_8), makeTest(detective.ieBelowVersion8));
      test(prefixedClassFor(classes.IE_LESSTHAN_9), makeTest(detective.ieBelowVersion9));
      test(prefixedClassFor(classes.IE_LESSTHAN_10), makeTest(detective.ieBelowVersion10));
      test(prefixedClassFor(classes.IE_LESSTHAN_11), makeTest(detective.ieBelowVersion11));
      test(prefixedClassFor(classes.IE_LESSTHAN_12), makeTest(detective.ieBelowVersion12));
    }

    if (!hasTag(tags.IE_GREATERTHAN_OFF)) {
      test(prefixedClassFor(classes.IE_GREATERTHAN_6), makeTest(detective.ieAboveVersion6));
      test(prefixedClassFor(classes.IE_GREATERTHAN_7), makeTest(detective.ieAboveVersion7));
      test(prefixedClassFor(classes.IE_GREATERTHAN_8), makeTest(detective.ieAboveVersion8));
      test(prefixedClassFor(classes.IE_GREATERTHAN_9), makeTest(detective.ieAboveVersion9));
      test(prefixedClassFor(classes.IE_GREATERTHAN_10), makeTest(detective.ieAboveVersion10));
      test(prefixedClassFor(classes.IE_GREATERTHAN_11), makeTest(detective.ieAboveVersion11));
    }

    if (!hasTag(tags.VERSION_OFF)) {
      test(prefixedClassFor(classes.IE_VERSION_6), makeTest(detective.ieIsVersion6));
      test(prefixedClassFor(classes.IE_VERSION_7), makeTest(detective.ieIsVersion7));
      test(prefixedClassFor(classes.IE_VERSION_8), makeTest(detective.ieIsVersion8));
      test(prefixedClassFor(classes.IE_VERSION_9), makeTest(detective.ieIsVersion9));
      test(prefixedClassFor(classes.IE_VERSION_10), makeTest(detective.ieIsVersion10));
      test(prefixedClassFor(classes.IE_VERSION_11), makeTest(detective.ieIsVersion11));
    }
  }
  cleanTags();
}

function cleanTags() {
  removeTag(tags.IE_GREATERTHAN_OFF);
  removeTag(tags.IE_LESSTHAN_OFF);
  removeTag(tags.VERSION_OFF);
  removeTag(tags.IE_ONLY);
  removeTag(tags.DEFUNCTR);
  removeTag(tags.NOTAGGING);
}

var tagger = function (detective) {
  return {
    tag: function tag() {
      if (browserDocument) {
        tagPage(detective);
      }
    }
  };
};

var detective = new Detective();

var Defunctr = function () {
  function Defunctr() {
    classCallCheck(this, Defunctr);

    this.version = '1.3.0-beta1';
  }

  createClass(Defunctr, [{
    key: 'detective',
    get: function get() {
      return detective;
    }
  }]);
  return Defunctr;
}();

var defunctr = new Defunctr();

if (window) {
  tagger(detective).tag();

  window.defunctr = defunctr;
  if (Object.defineProperty) {
    Object.defineProperty(window, 'Defunctr', {
      get: function get() {
        logger.warn('window.Defunctr is deprecated and will be removed. Please use window.defunctr');
        return defunctr;
      },
      enumerable: true,
      configurable: true
    });
  } else {
    window.Defunctr = defunctr;
  }
}

return defunctr;

})));
