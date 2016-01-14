define(function (require) {
	var defunctr = require('defunctr'),
		detective = defunctr.detective,
		controller = require('controller'),
		$ = require('jquery');

	$(function () {

		if (detective.ieBelowVersion6) {
			controller.showOldIE();
		}
		if (detective.ieIsVersion6) {
			controller.showIE6();
		}
		if (detective.ieIsVersion7) {
			controller.showIE7();
		}
		if (detective.ieIsVersion8) {
			controller.showIE8();
		}
		if (detective.ieIsVersion9) {
			controller.showIE9();
		}
		if (detective.ieIsVersion10) {
			controller.showIE10();
		}
		if (detective.ieIsVersion11) {
			controller.showIE11();
		}
		if (detective.ieIsVersion12) {
			controller.showIE12();
		}
		if (detective.isEdge) {
			controller.showEdge();
		}

		if (detective.isOpera) {
			controller.showOpera();
		}
		if (detective.isFirefox) {
			controller.showFirefox();
		}
		if (detective.isSafari) {
			controller.showSafari();
		}
		if (detective.isKhtml) {
			controller.showKhtml();
		}
		if (detective.isOperaNext) {
			controller.showOperaNext();
		}
		if (detective.isUndetected) {
			controller.showUnknown();
		}
		if (detective.isChrome) {
			controller.showChrome();
		}

		if (detective.isWebkit && (!detective.isOperaNext && !detective.isSafari && !detective.isChrome)) {
			controller.showWebkit();
		}

	});

});