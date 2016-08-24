/* @flow */
'use strict';

import ie from '../../browsers/ie';
import hasXmlHttpRequestCheck from '../../checks/hasXmlHttpRequestCheck';
import hasBackCompatCheck from '../../checks/hasBackCompatCheck';

export default function() : boolean {
  return ie() && hasBackCompatCheck() && (!hasXmlHttpRequestCheck());
}
