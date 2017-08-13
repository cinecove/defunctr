import ie from '../../browsers/ie';
import hasQuerySelectorCheck from '../../checks/hasQuerySelectorCheck';

export default (window, document) => (
  ie(window) && hasQuerySelectorCheck(document)
);
