define(['jquery'], function ($) {
	return {
		getBody: function () {
			return $('body');
		},
		showIE: function () {
			$('.content').append('Hello Internet Explorer!');
		},
		showOldIE: function () {
			$('.content').append('Hello Internet Explorer 5!');
		},
		showIE6: function () {
			$('.content').append('Hello Internet Explorer 6!');
		},
		showIE7: function () {
			$('.content').append('Hello Internet Explorer 7!');
		},
		showIE8: function () {
			$('.content').append('Hello Internet Explorer 8!');
		},
		showIE9: function () {
			$('.content').append('Hello Internet Explorer 9!');
		},
		showIE10: function () {
			$('.content').append('Hello Internet Explorer 10!');
		},
		showIE11: function () {
			$('.content').append('Hello Internet Explorer 11!');
		},
		showIE12: function () {
			$('.content').append('Hello Internet Explorer 12!');
		},
		showOpera: function () {
			$('.content').append('Hello Opera!');
		},
		showOperaNext: function () {
			$('.content').append('Hello Opera (Webkit)!');
		},
		showChrome: function () {
			$('.content').append('Hello Chrome!');
		},
		showSafari: function () {
			$('.content').append('Hello Safari (Webkit)!');
		},
		showFirefox: function () {
			$('.content').append('Hello Firefox!');
		},
		showUnknown: function () {
			$('.content').append('Hello Unknown Browser!');
		},
		showEdge: function () {
			$('.content').append('Hello Edge!');
		},
		showKhtml: function () {
			$('.content').append('Hello Khtml!');
		},
		showWebkit: function () {
			$('.content').append('Hello Webkit!');
		}
	};
});
