/* @flow */
'use strict';

import webKitTransformCheck from '../checks/webkitTransformCheck';
import msWriteProfilerMarkCheck from '../checks/msWriteProfilerMarkCheck';
import firefox from './firefox';
import opera from './opera';

// Current test can detect WebKit v1+
export default function () : boolean {
  return webKitTransformCheck() && (msWriteProfilerMarkCheck() === false) && (!firefox()) && (!opera());
}
