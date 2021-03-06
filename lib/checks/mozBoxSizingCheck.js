/* @flow */
'use strict';

import { document } from '../dom/dom';

export default function () : boolean {
  return Boolean((document) && (document.documentElement) && (document.documentElement.style) && ('MozBoxSizing' in document.documentElement.style));
}
