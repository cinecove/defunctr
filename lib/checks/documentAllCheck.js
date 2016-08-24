/* @flow */
'use strict';

import { document } from '../dom/dom';

export default function () : boolean {
  return Boolean((document) && (document.all));
}
