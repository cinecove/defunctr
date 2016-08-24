/* @flow */
'use strict';

import ie from '../../browsers/ie';
import functionalEventCheck from '../../checks/functionalEventCheck';

export default function() : boolean {
  return ie() && functionalEventCheck();
}
