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
  get isWebKit() : boolean {
    return webkit();
  }

  get isOpera() : boolean {
    return opera();
  }

  get isIE() : boolean {
    return ie();
  }

  get isFirefox() : boolean {
    return firefox();
  }

  get isSafari() : boolean {
    return safari();
  }

  get isKhtml() : boolean {
    return khtml();
  }

  get isOperaNext() : boolean {
    return operaNext();
  }

  get isChrome() : boolean {
    return chrome();
  }

  get isEdge() : boolean {
    return edge();
  }

  get isUndetected() : boolean {
    return undetected();
  }

  get standardsCompliant() : boolean {
    return (versions.ie.isAboveVersion9() || !ie());
  }

  get chromeIsAbove15() : boolean {
    return versions.chrome.isAboveVersion15();
  }

  get ieIsVersion11() : boolean {
    return versions.ie.isVersion11();
  }

  get ieIsVersion10() : boolean {
    return versions.ie.isVersion10();
  }

  get ieIsVersion9() : boolean {
    return versions.ie.isVersion9();
  }

  get ieIsVersion8() : boolean {
    return versions.ie.isVersion8();
  }

  get ieIsVersion7() : boolean {
    return versions.ie.isVersion7();
  }

  get ieIsVersion6() : boolean {
    return versions.ie.isVersion6();
  }

  get ieIsBelowVersion6() : boolean {
    return versions.ie.isBelowVersion6();
  }

  get ieIsBelowVersion7() : boolean {
    return versions.ie.isBelowVersion7();
  }

  get ieIsBelowVersion8() : boolean {
    return versions.ie.isBelowVersion8();
  }

  get ieIsBelowVersion9() : boolean {
    return versions.ie.isBelowVersion9();
  }

  get ieIsBelowVersion10() : boolean {
    return versions.ie.isBelowVersion10();
  }

  get ieIsBelowVersion11() : boolean {
    return versions.ie.isBelowVersion11();
  }

  get ieIsBelowVersion12() : boolean {
    return versions.ie.isBelowVersion12();
  }

  get ieIsAboveVersion5() : boolean {
    return versions.ie.isAboveVersion5();
  }

  get ieIsAboveVersion6() : boolean {
    return versions.ie.isAboveVersion6();
  }

  get ieIsAboveVersion7() : boolean {
    return versions.ie.isAboveVersion7();
  }

  get ieIsAboveVersion8() : boolean {
    return versions.ie.isAboveVersion8();
  }

  get ieIsAboveVersion9() : boolean {
    return versions.ie.isAboveVersion9();
  }

  get ieIsAboveVersion10() : boolean {
    return versions.ie.isAboveVersion10();
  }

  get ieIsAboveVersion11() : boolean {
    return versions.ie.isAboveVersion11();
  }
}
