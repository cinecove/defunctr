/* @flow */
'use strict';

import { document } from '../dom/dom';

// BackCompat is QuirksMode
// CSS1Compat is Standards Mode

export default function () : boolean {
  return Boolean(
    (document && document.compatMode) &&
    (document.compatMode === 'CSS1Compat' || document.compatMode === 'BackCompat')
  );
}
