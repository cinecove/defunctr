/* @flow */
'use strict';

import isAboveVersion7 from './isAboveVersion7';
import isBelowVersion9 from './isBelowVersion9';

export default function() : boolean {
  return isAboveVersion7() && isBelowVersion9();
}
