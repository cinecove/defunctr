import isAboveVersion9 from './isAboveVersion9';
import isBelowVersion11 from './isBelowVersion11';

export default (window, document) => (
  isAboveVersion9(window) && isBelowVersion11(window, document)
);
