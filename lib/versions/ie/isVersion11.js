import isAboveVersion10 from './isAboveVersion10';
import isBelowVersion12 from './isBelowVersion12';

export default (window, document) => (
  isAboveVersion10(window, document) && isBelowVersion12(window)
);
