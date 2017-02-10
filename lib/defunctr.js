/* @flow */
'use strict';

import Detective from './detective';
import { console, window } from './dom/dom';
import tagger from './tagger';

class Defunctr {
  constructor() {
    this.version = '@@version';
    this.detective = new Detective();
  }
}

const defunctr = new Defunctr();

if (window) {
  tagger(new Detective()).tag();

  window.defunctr = defunctr;
  try {
    Object.defineProperty(window, 'Defunctr', {
      get: function() {
        console.warn('window.Defunctr is deprecated and will be removed. Please use window.defunctr');
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
