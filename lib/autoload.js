import deprecateDefunctr from './deprecateDefunctr';

export default (defunctr, window, console) => {
	if (window) {
		const autoloader = defunctr(window);
		autoloader.tag('');
		window.defunctr = autoloader;
		deprecateDefunctr(defunctr, window, console);
		if (typeof exports === 'object' && typeof module !== 'undefined') {
			return defunctr;
		}
		return autoloader;
	}
};
