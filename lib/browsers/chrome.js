/* @flow */
'use strict';

import safari from './safari';
import operaNext from './operaNext';
import webkit from './webkit';

export default function () : boolean {
  return !safari() && !operaNext() && webkit();
}
