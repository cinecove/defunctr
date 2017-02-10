/* @flow */
'use strict';

import ie from '../../browsers/ie';
import attachEventCheck from '../../checks/attachEventCheck';

export default function() : boolean {
  return ie() && attachEventCheck();
}
