/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasAtobCheck from '../../checks/hasAtobCheck';

export default function() : boolean {
  return ie() && hasAtobCheck();
}
