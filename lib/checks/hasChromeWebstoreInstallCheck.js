/* @flow */
'use strict';

import { window } from '../dom/dom';

export default function() : boolean {
  return Boolean(
    (window) &&
    (window.chrome) &&
    (window.chrome.webstore) &&
    (window.chrome.webstore.install)
  );
}
