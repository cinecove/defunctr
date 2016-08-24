/* @flow */
'use strict';

import { window } from '../dom/dom';

export default function () : boolean {
  return Boolean(
    (window) && (window.HTMLElement) &&
    (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
  );
}
