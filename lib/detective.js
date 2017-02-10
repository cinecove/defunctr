/* @flow */
'use strict';

import chrome from './browsers/chrome';
import edge from './browsers/edge';
import firefox from './browsers/firefox';
import khtml from './browsers/khtml';
import opera from './browsers/opera';
import operaNext from './browsers/operaNext';
import safari from './browsers/safari';
import undetected from './browsers/undetected';
import webkit from './browsers/webkit';
import versions from './versions/index';
import ie from './browsers/ie';

export default class Detective {
  constructor() {
    this.isWebKit = webkit();
    this.isOpera = opera();
    this.isIE = ie();
    this.isFirefox = firefox();
    this.isSafari = safari();
    this.isKhtml = khtml();
    this.isOperaNext = operaNext();
    this.isChrome = chrome();
    this.isEdge = edge();
    this.isUndetected = undetected();

    this.standardsCompliant = (versions.ie.isAboveVersion9() || !ie());

    this.chromeIsAbove15 = versions.chrome.isAboveVersion15();

    this.ieIsVersion11 = versions.ie.isVersion11();
    this.ieIsVersion10 = versions.ie.isVersion10();
    this.ieIsVersion9 = versions.ie.isVersion9();
    this.ieIsVersion8 = versions.ie.isVersion8();
    this.ieIsVersion7 = versions.ie.isVersion7();
    this.ieIsVersion6 = versions.ie.isVersion6();

    this.ieIsBelowVersion6 = versions.ie.isBelowVersion6();
    this.ieIsBelowVersion7 = versions.ie.isBelowVersion7();
    this.ieIsBelowVersion8 = versions.ie.isBelowVersion8();
    this.ieIsBelowVersion9 = versions.ie.isBelowVersion9();
    this.ieIsBelowVersion10 = versions.ie.isBelowVersion10();
    this.ieIsBelowVersion11 = versions.ie.isBelowVersion11();
    this.ieIsBelowVersion12 = versions.ie.isBelowVersion12();

    this.ieIsAboveVersion6 = versions.ie.isAboveVersion6();
    this.ieIsAboveVersion7 = versions.ie.isAboveVersion7();
    this.ieIsAboveVersion8 = versions.ie.isAboveVersion8();
    this.ieIsAboveVersion9 = versions.ie.isAboveVersion9();
    this.ieIsAboveVersion10 = versions.ie.isAboveVersion10();
    this.ieIsAboveVersion11 = versions.ie.isAboveVersion11();
  }
}
