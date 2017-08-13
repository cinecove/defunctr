import ie from '../../browsers/ie';
import hasXmlHttpRequestCheck from '../../checks/hasXmlHttpRequestCheck';
import hasBackCompatCheck from '../../checks/hasBackCompatCheck';

export default (window, document) => (
  ie(window) && !hasBackCompatCheck(document) && !hasXmlHttpRequestCheck(window)
);
