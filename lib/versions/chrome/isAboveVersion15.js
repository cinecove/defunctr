import hasChromeWebstoreInstallCheck from '../../checks/hasChromeWebstoreInstallCheck';
import chrome from '../../browsers/chrome';

export default (window, document) => (
  chrome(window, document) && hasChromeWebstoreInstallCheck(window)
);
