import defunctr from './defunctr';
import autoload from './autoload';
//import { console, window } from './dom/dom';

const logger = window && window.console ? window.console : {}; // fix for ie 6 not having a console

export default autoload(defunctr, window, logger);
