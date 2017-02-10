'user strict';

import { window } from './dom/dom';

const optionalModernizr = {
  modernizr: undefined
}

if (typeof require === 'function') {
  require(['modernizr'], function (m) {
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

export default optionalModernizr;
