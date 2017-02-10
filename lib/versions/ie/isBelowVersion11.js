/* @flow */
'use strict';

import ie from '../../browsers/ie';
import activeXCheck from '../../checks/activeXCheck';

export default function() : boolean {
  return ie() && activeXCheck();
}
