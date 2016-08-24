/* @flow */
'use strict';

import { window } from '../dom/dom';

export default function () : boolean {
  return Boolean((window) && (typeof window.msWriteProfilerMark !== 'undefined'));
}
