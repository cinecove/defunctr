/* @flow */
'use strict';

import isAboveVersion8 from './isAboveVersion8';
import isBelowVersion10 from './isBelowVersion10';

export default function() : boolean {
  return isAboveVersion8() && isBelowVersion10();
}
