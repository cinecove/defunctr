/* @flow */
'use strict';

import khtmlMarqueeCheck from '../checks/khtmlMarqueeCheck';
import safari from '../browsers/safari';

export default function () : boolean {
  return khtmlMarqueeCheck() && (!safari());
}
