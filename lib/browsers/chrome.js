import safari from './safari';
import operaNext from './operaNext';
import webkit from './webkit';

export default (window, document) => (
  !safari(window) && !operaNext(window, document) && webkit(window, document)
);
