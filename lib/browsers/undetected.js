import chrome from './chrome';
import edge from './edge';
import firefox from './firefox';
import ie from './ie';
import opera from './opera';
import operaNext from './operaNext';
import safari from './safari';
import webkit from './webkit';

export default (window, document) => (
  !webkit(window, document) &&
  !ie(window) &&
  !chrome(window, document) &&
  !edge(window) &&
  !firefox(window) &&
  !opera(window) &&
  !operaNext(window, document) &&
  !safari(window)
);
