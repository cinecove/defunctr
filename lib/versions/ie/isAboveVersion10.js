/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasAtobCheck from '../../checks/hasAtobCheck';
import attachEventCheck from '../../checks/attachEventCheck';

export default function() : boolean {
  return ie() && hasAtobCheck() && (!attachEventCheck());
}
