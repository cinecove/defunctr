/* @flow */
'use strict';

import activeXCheck from '../checks/activeXCheck';
import functionalEventCheck from '../checks/functionalEventCheck';
import msWriteProfilerMarkCheck from '../checks/msWriteProfilerMarkCheck';

export default function () : boolean {
  return Boolean(
    !activeXCheck() &&
    functionalEventCheck() &&
    msWriteProfilerMarkCheck()
  );
}
