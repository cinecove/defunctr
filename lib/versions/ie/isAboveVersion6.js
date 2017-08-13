import ie from '../../browsers/ie';
import hasXmlHttpRequestCheck from '../../checks/hasXmlHttpRequestCheck';
import hasBackCompatCSS1Check from '../../checks/hasBackCompatCSS1Check';

export default (window, document) => (
  ie(window) && hasBackCompatCSS1Check(document) && hasXmlHttpRequestCheck(window)
);
