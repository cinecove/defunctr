import isAboveVersion7 from './isAboveVersion7';
import isBelowVersion9 from './isBelowVersion9';

export default (window, document) => (
  isAboveVersion7(window, document) && isBelowVersion9(window, document)
);
