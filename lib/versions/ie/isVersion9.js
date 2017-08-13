import isAboveVersion8 from './isAboveVersion8';
import isBelowVersion10 from './isBelowVersion10';

export default (window, document) => (
  isAboveVersion8(window, document) && isBelowVersion10(window)
);
