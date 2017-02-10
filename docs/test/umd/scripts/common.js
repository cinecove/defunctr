requirejs.config({
	baseUrl: 'scripts',
	paths: {
		defunctr: '../../../scripts/defunctr'
	},
	shim: {
		modernizr: {
			exports: 'Modernizr'
		}
	}
});
