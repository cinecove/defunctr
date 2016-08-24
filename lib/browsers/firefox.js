/* @flow */
'use strict';

import mozBoxSizingCheck from '../checks/mozBoxSizingCheck';

export default function () : boolean {
  return mozBoxSizingCheck();
}
