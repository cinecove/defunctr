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

export default (window, document) => () => ({
  isWebKit: webkit(window, document),
  isOpera: opera(window),
  isIE: ie(window),
  isFirefox: firefox(window),
  isSafari: safari(window),
  isKhtml: khtml(window, document),
  isOperaNext: operaNext(window, document),
  isChrome: chrome(window, document),
  isEdge: edge(window),
  isUndetected: undetected(window, document),

  standardsCompliant: versions.ie.isAboveVersion9(window) || !ie(window),

  chromeIsAbove15: versions.chrome.isAboveVersion15(window, document),

  ieIsVersion11: versions.ie.isVersion11(window, document),
  ieIsVersion10: versions.ie.isVersion10(window, document),
  ieIsVersion9: versions.ie.isVersion9(window, document),
  ieIsVersion8: versions.ie.isVersion8(window, document),
  ieIsVersion7: versions.ie.isVersion7(window, document),
  ieIsVersion6: versions.ie.isVersion6(window, document),
  
  ieIsBelowVersion6: versions.ie.isBelowVersion6(window, document),
  ieIsBelowVersion7: versions.ie.isBelowVersion7(window, document),
  ieIsBelowVersion8: versions.ie.isBelowVersion8(window, document),
  ieIsBelowVersion9: versions.ie.isBelowVersion9(window, document),
  ieIsBelowVersion10: versions.ie.isBelowVersion10(window, document),
  ieIsBelowVersion11: versions.ie.isBelowVersion11(window, document),
  ieIsBelowVersion12: versions.ie.isBelowVersion12(window, document),

  ieIsAboveVersion5: versions.ie.isAboveVersion5(window, document),
  ieIsAboveVersion6: versions.ie.isAboveVersion6(window, document),
  ieIsAboveVersion7: versions.ie.isAboveVersion7(window, document),
  ieIsAboveVersion8: versions.ie.isAboveVersion8(window, document),
  ieIsAboveVersion9: versions.ie.isAboveVersion9(window, document),
  ieIsAboveVersion10: versions.ie.isAboveVersion10(window, document),
  ieIsAboveVersion11: versions.ie.isAboveVersion11(window, document),
});
