/* @flow */

import { window } from '../dom/dom';

export default function () : boolean {
  return Boolean(
    (window) &&
    (typeof window.XMLHttpRequest !== 'undefined')
  );
}
