/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasQuerySelectorCheck from '../../checks/hasQuerySelectorCheck';

export default function() : boolean {
  return ie() && hasQuerySelectorCheck();
}
