import ie from '../../browsers/ie';
import hasAtobCheck from '../../checks/hasAtobCheck';

export default window => (
  ie(window) && !hasAtobCheck(window)
);
