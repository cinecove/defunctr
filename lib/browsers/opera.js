/* @flow */
'use strict';

import operaVersionCheck from '../checks/operaVersionCheck';

export default function () : boolean {
  return operaVersionCheck();
}
