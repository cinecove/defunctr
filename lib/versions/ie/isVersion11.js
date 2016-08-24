/* @flow */
'use strict';

import isAboveVersion10 from './isAboveVersion10';
import isBelowVersion12 from './isBelowVersion12';

export default function() : boolean {
  return isAboveVersion10() && isBelowVersion12();
}
