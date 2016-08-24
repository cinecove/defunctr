/* @flow */
'use strict';

import { window } from '../dom/dom';

export default function () : boolean {
  return Boolean((window && window.Event) && (typeof window.Event === 'function'));
}
