requirejs.config({
	baseUrl: 'scripts',
	paths: {
		defunctr: '../../../release/defunctr'
	},
	shim: {
		Modernizr: {
			exports: 'Modernizr'
		}
	}
});
