import isAboveVersion6 from './isAboveVersion6';
import isBelowVersion8 from './isBelowVersion8';

export default (window, document) => (
  isAboveVersion6(window, document) && isBelowVersion8(window, document)
);
