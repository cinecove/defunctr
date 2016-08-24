/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasAddEventListenerCheck from '../../checks/hasAddEventListenerCheck';

export default function() : boolean {
  return ie() && (!hasAddEventListenerCheck());
}
