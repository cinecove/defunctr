import classes from './classes';
import tags from './tags';
import prefixedClassForFactory from './prefixedClassFor';
import optionalModernizr from './modernizr';

const extractDocElement = document => (
  (document && document.documentElement && document.documentElement.className) ? document.documentElement : { className: '' }
);

const hasTag = (docElement, tag) => (
  docElement.className.match(new RegExp(`\\b${tag}\\b`))
);

const removeTag = (docElement, tag) => {
  docElement.className = docElement.className.replace(new RegExp(`\\b${tag}\\b`), '');
};

const addTag = (docElement, tag) => {
  if (!hasTag(docElement, tag)) {
    docElement.className += docElement.className.length > 0 ? ` ${tag}` : '';
  }
};

const cleanTags = docElement => {
  removeTag(docElement, tags.IE_GREATERTHAN_OFF);
  removeTag(docElement, tags.IE_LESSTHAN_OFF);
  removeTag(docElement, tags.VERSION_OFF);
  removeTag(docElement, tags.IE_ONLY);
  removeTag(docElement, tags.DEFUNCTR);
  removeTag(docElement, tags.NOTAGGING);
};

const makeTest = item => () => (item);

const test = (docElement, modernizr) => (key, test) => {
  if (modernizr) {
    modernizr.addTest(key, test);
  } else {
    if (test()) {
      addTag(docElement, key);
    } else {
      addTag(docElement, `no-${key}`);
    }
  }
};

const tagPage = (detective, document, modernizr, prefix = '') => {
  const docElement = extractDocElement(document);
  const tester = test(docElement, modernizr);
  const prefixedClassFor = prefixedClassForFactory(prefix);
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

export default (detective, window, document) => ({
  tag: (prefix = '') => {
    if (document) {
      const d = detective();
      tagPage(d, document, optionalModernizr(window).modernizr, prefix);
    }
  }
});
