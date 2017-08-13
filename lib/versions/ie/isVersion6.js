import isAboveVersion5 from './isAboveVersion5';
import isBelowVersion7 from './isBelowVersion7';

export default (window, document) => (
  isAboveVersion5(window, document) && isBelowVersion7(window, document)
);
