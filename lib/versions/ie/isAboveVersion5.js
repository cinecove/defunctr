/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasBackCompatCSS1Check from '../../checks/hasBackCompatCSS1Check';

export default function() : boolean {
  return ie() && hasBackCompatCSS1Check();
}
