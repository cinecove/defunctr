import ie from '../../browsers/ie';
import hasCompatModeCheck from '../../checks/hasCompatModeCheck';

export default (window, document) => (
  ie(window) && !hasCompatModeCheck(document)
);
