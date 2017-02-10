/* @flow */
'use strict';

import safari from './safari';
import operaNext from './operaNext';
import webkit from './webkit';
import firefox from './firefox';

export default function () : boolean {
  return !safari() && !operaNext() && !firefox() && webkit();
}
