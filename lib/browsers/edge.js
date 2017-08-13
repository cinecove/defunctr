import activeXCheck from '../checks/activeXCheck';
import functionalEventCheck from '../checks/functionalEventCheck';
import msWriteProfilerMarkCheck from '../checks/msWriteProfilerMarkCheck';

export default window => (
  !activeXCheck(window) && functionalEventCheck(window) && msWriteProfilerMarkCheck(window)
);
