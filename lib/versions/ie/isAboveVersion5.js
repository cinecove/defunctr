import ie from '../../browsers/ie';
import hasBackCompatCSS1Check from '../../checks/hasBackCompatCSS1Check';

export default (window, document) => (
  ie(window) && hasBackCompatCSS1Check(document)
);
