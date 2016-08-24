/* @flow */
'use strict';

import isAboveVersion9 from './isAboveVersion9';
import isBelowVersion11 from './isBelowVersion11';

export default function() : boolean {
  return isAboveVersion9() && isBelowVersion11();
}
