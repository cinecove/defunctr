/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasCompatModeCheck from '../../checks/hasCompatModeCheck';
import hasBackCompatCSS1Check from '../../checks/hasBackCompatCSS1Check';

export default function() : boolean {
  return ie() && (!hasCompatModeCheck() || hasBackCompatCSS1Check());
}
