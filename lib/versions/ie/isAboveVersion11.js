import ie from '../../browsers/ie';
import functionalEventCheck from '../../checks/functionalEventCheck';

export default window => (
  ie(window) && functionalEventCheck(window)
);
