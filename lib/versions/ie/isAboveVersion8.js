import ie from '../../browsers/ie';
import hasAddEventListenerCheck from '../../checks/hasAddEventListenerCheck';

export default (window, document) => (
  ie(window) && hasAddEventListenerCheck(document)
);