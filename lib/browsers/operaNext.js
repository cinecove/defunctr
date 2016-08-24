/* @flow */
'use strict';

import webkit from './webkit';
import { navigator } from '../dom/dom';

/*
  HACK: This function needs to be refactored to include a dom test
 */

function hasOperaHeader() : boolean {
  return Boolean((navigator && navigator.userAgent) && /(Opera|OPR)/.test(navigator.userAgent));
}

export default function () : boolean {
  return webkit() && hasOperaHeader();
}
