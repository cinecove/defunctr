/* @flow */
'use strict';

import classes from './classes';
import tags from './tags';
import prefixedClassFor from './prefixedClassFor';
import { document } from './dom/dom';
import optionalModernizr from './modernizr';

const docElement = (document && document.documentElement && document.documentElement.className) ? document.documentElement : { className: '' };

const Modernizr = optionalModernizr.modernizr;

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
      addTag(`no-${key}`);
    }
  }
}

function removeTag(tag) {
  docElement.className = docElement.className.replace(new RegExp(`\\b${tag}\\b`), '');
}

function addTag(tag) {
  if (!hasTag(tag)) {
    docElement.className += docElement.className.length > 0 ? ' ' + tag : tag;
  }
}

function hasTag(tag) {
  return docElement.className.match(new RegExp(`\\b${tag}\\b`));
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

export default function(detective) {
  return {
    tag: function () {
      if (document) {
        tagPage(detective);
      }
    }
  };
}
