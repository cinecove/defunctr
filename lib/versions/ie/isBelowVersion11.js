/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasAtobCheck from '../../checks/hasAtobCheck';
import activeXCheck from '../../checks/activeXCheck';

export default function() : boolean {
  return ie() && (!hasAtobCheck()) && activeXCheck();
}
