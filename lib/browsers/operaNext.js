/* @flow */
'use strict';

import { window, document } from '../dom/dom';

/*
  HACK: This function needs to be refactored to include a dom test
 */

function hasOperaHeader() : boolean {
  //return Boolean((navigator && navigator.userAgent) && /(Opera|OPR)/.test(navigator.userAgent));
  try {
    return 'WebkitTransform' in document.documentElement.style && window.clientInformation.vendor.substring('Opera') === 0;
  } catch (ex) {
    return false;
  }
}

export default function () : boolean {
  return hasOperaHeader();
}
