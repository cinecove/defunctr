/* @flow */
'use strict';

import Detective from './detective';
import { console } from './dom/dom';
import tagger from './tagger';

const detective = new Detective();

class Defunctr {
  constructor() {
    this.version = '@@version';
  }

  get detective() {
    return detective;
  }
}

const defunctr = new Defunctr();

if (window) {
  tagger(detective).tag();

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

export default defunctr
