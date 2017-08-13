const message = 'window.Defunctr is deprecated and will be removed in version 2.0. Please use window.defunctr instead.';

export default (defunctr, window) => {
	try {
		Object.defineProperty(window, 'Defunctr', {
			get: () => {
				try {
					console.warn(message);
				} catch (ex) {
					console.log(message);
				}
				return defunctr;
			},
			enumerable: true,
			configurable: true,
		});
	} catch (ex) {
		window.Defunctr = defunctr;
	}
};
