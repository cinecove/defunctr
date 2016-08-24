/* @flow */
'use strict';

import { window } from '../dom/dom';

export default function () : boolean {
  return 'ActiveXObject' in window;
}
