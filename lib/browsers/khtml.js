import khtmlMarqueeCheck from '../checks/khtmlMarqueeCheck';
import safari from '../browsers/safari';

export default (window, document) => (
  khtmlMarqueeCheck(document) && !safari(window)
);
