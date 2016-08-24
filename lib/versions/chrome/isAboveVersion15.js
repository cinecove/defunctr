/* @flow */
'use strict';

import hasChromeWebstoreInstallCheck from '../../checks/hasChromeWebstoreInstallCheck';
import chrome from '../../browsers/chrome';

export default function() : boolean {
  return chrome() && hasChromeWebstoreInstallCheck();
}
