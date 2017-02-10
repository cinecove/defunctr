/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasCompatModeCheck from '../../checks/hasCompatModeCheck';

export default function() : boolean {
  return ie() && (!hasCompatModeCheck());
}
