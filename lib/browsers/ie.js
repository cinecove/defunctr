/* @flow */
'use strict';

//import documentAllCheck from '../checks/documentAllCheck';
//import opera from './opera';
import activeXCheck from '../checks/activeXCheck';

/*
function legacy() : boolean {
  return Boolean(documentAllCheck() && (opera() === false));
}
*/

export default function () : boolean {
  return activeXCheck();
}
