/*!
 * Defunctr 1.3.0-beta1
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2016 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2016-08-24T17:04:24.709Z
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('modernizr')) :
  typeof define === 'function' && define.amd ? define(['modernizr'], factory) :
  (global.defunctr = factory(global.Modernizr));
}(this, (function (Modernizr) { 'use strict';

Modernizr = 'default' in Modernizr ? Modernizr['default'] : Modernizr;

var window$1 = window || null;
var navigator$1 = navigator || null;
var document = window$1 ? window$1.document || null : null;
var _undefined = void 0;

var noop = function noop() {};
var console = window$1 && window$1.console ? window$1.console : undefined;
var log = console ? console.log || noop : noop;
var warn = console ? console.warn || log : noop;
var error = console ? console.error || log : noop;

var logger = {
  log: log,
  warn: warn,
  error: error
};

function htmlElementConstructorCheck () {
  return Boolean(window$1 && window$1.HTMLElement && Object.prototype.toString.call(window$1.HTMLElement).indexOf('Constructor') > 0);
}

function safari () {
  return htmlElementConstructorCheck();
}

function webKitTransformCheck () {
  return Boolean(document && document.documentElement && document.documentElement.style && 'WebkitTransform' in document.documentElement.style);
}

function msWriteProfilerMarkCheck () {
  return Boolean(window$1 && typeof window$1.msWriteProfilerMark !== 'undefined');
}

function webkit () {
  return webKitTransformCheck() && msWriteProfilerMarkCheck() === false;
}


function hasOperaHeader() {
  return Boolean(navigator$1 && navigator$1.userAgent && /(Opera|OPR)/.test(navigator$1.userAgent));
}

function operaNext () {
  return webkit() && hasOperaHeader();
}

function chrome () {
  return !safari() && !operaNext() && webkit();
}

function activeXCheck () {
  return 'ActiveXObject' in window$1;
}

function functionalEventCheck () {
  return Boolean(window$1 && window$1.Event && typeof window$1.Event === 'function');
}

function edge () {
  return Boolean(!activeXCheck() && functionalEventCheck() && msWriteProfilerMarkCheck());
}

function mozBoxSizingCheck () {
  return Boolean(document && document.documentElement && document.documentElement.style && 'MozBoxSizing' in document.documentElement.style);
}

function firefox () {
  return mozBoxSizingCheck();
}

function khtmlMarqueeCheck () {
  return Boolean(document && document.documentElement && document.documentElement.style && 'KhtmlMarquee' in document.documentElement.style);
}

function khtml () {
  return khtmlMarqueeCheck();
}

function operaVersionCheck () {
  return Boolean(window$1 && window$1.opera && window$1.opera.version !== _undefined);
}

function opera () {
  return operaVersionCheck();
}



function ie () {
  return activeXCheck();
}

function undetected () {
  return !webkit() && !ie() && !chrome() && !edge() && !firefox() && !opera() && !operaNext() && !safari();
}

function hasXmlHttpRequestCheck () {
  return Boolean(window$1 && typeof window$1.XMLHttpRequest !== 'undefined');
}

function hasBackCompatCheck () {
  return Boolean(document && document.compatMode && document.compatMode === 'BackCompat');
}

function isAboveVersion6 () {
  return ie() && hasBackCompatCheck() && !hasXmlHttpRequestCheck();
}

function hasQuerySelectorCheck () {
  return Boolean(document && document.querySelector !== 'undefined');
}

function isAboveVersion7 () {
  return ie() && hasQuerySelectorCheck();
}

function hasAddEventListenerCheck () {
  return Boolean(document && document.addEventListener !== 'undefined');
}

function isAboveVersion8 () {
  return ie() && hasAddEventListenerCheck();
}

function hasAtobCheck () {
  return Boolean(window$1 && typeof window$1.atob !== 'undefined');
}

function isAboveVersion9 () {
  return ie() && hasAtobCheck();
}

function isAboveVersion10 () {
  return ie() && hasAtobCheck() && !activeXCheck();
}

function isAboveVersion11 () {
  return ie() && functionalEventCheck();
}

function hasCompatModeCheck () {
  return Boolean(document && typeof document.compatMode !== 'undefined');
}

function isBelowVersion6 () {
  return ie() && (!hasCompatModeCheck() || hasBackCompatCheck());
}

function isBelowVersion7 () {
  return ie() && !hasBackCompatCheck() && !hasXmlHttpRequestCheck();
}

function isBelowVersion8 () {
  return ie() && !hasQuerySelectorCheck();
}

function isBelowVersion9 () {
  return ie() && !hasAddEventListenerCheck();
}

function isBelowVersion10 () {
  return ie() && !hasAtobCheck();
}

function isBelowVersion11 () {
  return ie() && !hasAtobCheck() && activeXCheck();
}

function isBelowVersion12 () {
  return ie() && !functionalEventCheck();
}

function isAboveVersion5 () {
  return ie() && hasBackCompatCheck();
}

function isVersion6 () {
  return isAboveVersion5() && isBelowVersion7();
}

function isVersion7 () {
  return isAboveVersion6() && isBelowVersion8();
}

function isVersion8 () {
  return isAboveVersion7() && isBelowVersion9();
}

function isVersion9 () {
  return isAboveVersion8() && isBelowVersion10();
}

function isVersion10 () {
  return isAboveVersion9() && isBelowVersion11();
}

function isVersion11 () {
  return isAboveVersion10() && isBelowVersion12();
}



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

function hasChromeWebstoreInstallCheck () {
  return Boolean(window$1 && window$1.chrome && window$1.chrome.webstore && window$1.chrome.webstore.install);
}

function isAboveVersion15 () {
  return chrome() && hasChromeWebstoreInstallCheck();
}



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

function prefixedClassFor (className) {
  return '' + prefix + className;
}

var docElement = document && document.documentElement && document.documentElement.className ? document.documentElement : { className: '' };

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

function tagger (detective) {
  return {
    tag: function tag() {
      if (document) {
        tagPage(detective);
      }
    }
  };
}

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