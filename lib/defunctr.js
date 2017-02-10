/* @flow */
'use strict';

import Detective from './detective';
import { console, window } from './dom/dom';
import tagger from './tagger';

class Defunctr {
  constructor() {
    this.version = '@@version';
    this._d = null;
  }

  get detective() {
    if (this._d === null) {
      this._d = new Detective();
    }
    return this._d;
  }
}

const defunctr = new Defunctr();

if (window) {
  tagger(new Detective()).tag();

  window.defunctr = defunctr;
  if (Object.defineProperty) {
    Object.defineProperty(window, 'Defunctr', {
      get: function() {
        console.warn('window.Defunctr is deprecated and will be removed. Please use window.defunctr');
        return defunctr;
      },
      enumerable: true,
      configurable: true
    });
  } else {
    window.Defunctr = defunctr;
  }
}

export default defunctr;
