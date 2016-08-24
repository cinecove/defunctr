/* @flow */
'use strict';

import chrome from './chrome';
import edge from './edge';
import firefox from './firefox';
import ie from './ie';
import opera from './opera';
import operaNext from './operaNext';
import safari from './safari';
import webkit from './webkit';

export default function () : boolean {
  return (
    !webkit() &&
    !ie() &&
    !chrome() &&
    !edge() &&
    !firefox() &&
    !opera() &&
    !operaNext() &&
    !safari()
  );
}
