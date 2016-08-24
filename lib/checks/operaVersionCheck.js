/* @flow */
'use strict';

import { window, undefined } from '../dom/dom';

export default function () : boolean {
  return Boolean((window) && (window.opera) && (window.opera.version !== undefined));
}
