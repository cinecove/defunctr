/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasBackCompatCheck from '../../checks/hasBackCompatCheck';

export default function() : boolean {
  return ie() && hasBackCompatCheck();
}
