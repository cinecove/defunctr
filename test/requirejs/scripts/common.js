requirejs.config({
	baseUrl: 'scripts',
	paths: {
		defunctr: '../../../src/defunctr'
	},
	shim: {
		Modernizr: {
			exports: 'Modernizr'
		}
	}
});