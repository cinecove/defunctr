/* @flow */
'use strict';

import isAboveVersion5 from './isAboveVersion5';
import isBelowVersion7 from './isBelowVersion7';

export default function() : boolean {
  return isAboveVersion5() && isBelowVersion7();
}
