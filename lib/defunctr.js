/* @flow */
'use strict';

import Detective from './detective';
import { console, window } from './dom/dom';
import tagger from './tagger';

class Defunctr {
  constructor() {
    this.version = '@@version';
    this.browser = function browser () {
      var d = new Detective();
      return {
        vendor: d.isChrome ? 'chrome' : d.isEdge ? 'edge' : d.isFirefox ? 'firefox' : d.isIE ? 'ie' : d.isKhtml ? 'khtml' : d.isOpera && d.isOperaNext ? 'opera' : d.isSafari ? 'safari' : 'unknown',
        version: !d.isIE ? 0 : d.ieIsBelowVersion6 ? 5 : d.ieIsVersion6 ? 6 : d.ieIsVersion7 ? 7 : d.ieIsVersion8 ? 8 : d.ieIsVersion9 ? 9 : d.ieIsVersion10 ? 10 : d.ieIsVersion11 ? 11 : d.ieIsAboveVersion11 ? 12 : 0,
        standards: d.standardsCompliant,
        detected: !d.isUndetected,
        webkit: d.isWebKit
      }
    };
  }
}

const defunctr = new Defunctr();

try {
  Object.defineProperty(defunctr, 'detective', {
    get: function() {
      console.warn('defunctr.detective is deprecated and will be removed in 2.0. Please use window.browser instead.');
      return new Detective();
    },
    enumerable: true,
    configurable: true
  });
} catch (ex) {
  defunctr.detective = new Detective();
}

if (window) {
  tagger(new Detective()).tag();

  window.defunctr = defunctr;
  try {
    Object.defineProperty(window, 'Defunctr', {
      get: function() {
        console.warn('window.Defunctr is deprecated and will be removed in 2.0. Please use window.defunctr instead.');
        return defunctr;
      },
      enumerable: true,
      configurable: true
    });
  } catch (ex) {
    window.Defunctr = defunctr;
  }
}

export default defunctr;
