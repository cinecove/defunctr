import ie from '../../browsers/ie';
import hasAtobCheck from '../../checks/hasAtobCheck';
import attachEventCheck from '../../checks/attachEventCheck';

export default (window, document) => (
  ie(window) && hasAtobCheck(window) && !attachEventCheck(document)
);
