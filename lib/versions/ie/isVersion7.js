/* @flow */
'use strict';

import isAboveVersion6 from './isAboveVersion6';
import isBelowVersion8 from './isBelowVersion8';

export default function() : boolean {
  return isAboveVersion6() && isBelowVersion8();
}
