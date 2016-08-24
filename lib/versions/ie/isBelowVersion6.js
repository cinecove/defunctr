/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasCompatModeCheck from '../../checks/hasCompatModeCheck';
import hasBackCompatCheck from '../../checks/hasBackCompatCheck';

export default function() : boolean {
  return ie() && (!hasCompatModeCheck() || hasBackCompatCheck());
}
