import ie from '../../browsers/ie';
import attachEventCheck from '../../checks/attachEventCheck';

export default (window, document) => (
  ie(window) && attachEventCheck(document)
);