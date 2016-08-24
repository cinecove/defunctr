requirejs.config({
	baseUrl: 'scripts',
	paths: {
		defunctr: '../../../dist/defunctr-dev'
	},
	shim: {
		modernizr: {
			exports: 'Modernizr'
		}
	}
});
