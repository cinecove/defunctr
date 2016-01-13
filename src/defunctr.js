(function (window, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = window.document ? factory(window, window.document, window.Modernizr, true) : function(w) {
            if (!w.document) {
                throw new Error("Defunctr requires a window with a document. It can not be used from in the node environment.");
            } else {
                return factory(w, w.document, window.Modernizr);
            }
        };
    } else {
        factory(window, window.document, window.Modernizr);
    }
}(typeof window !== "undefined" ? window : this, function (window, document, modernizr, noGlobal) {
    if (typeof modernizr === 'undefined') {
        throw new Error("Modernizr was not found attached to the window.");
    }

    var version = '@@version',
        r = {},
        docElement = document.documentElement,
        defunctr = 'defunctr',
        prefix = '',
        gtoff = docElement.className.indexOf('defunctr-gt-off') > 0,
        ltoff = docElement.className.indexOf('defunctr-lt-off') > 0,
        voff = docElement.className.indexOf('defunctr-version-off') > 0,
        onlyie = docElement.className.indexOf('defunctr-ie-only') > 0,
        tests = [];

    r.detective = (function (window, document, undefined) {
        var r = {};
        r.isWebkit = (function (document, undefined) { return 'WebkitTransform' in document.documentElement.style; /* v 1+ */})(document);
        r.isOpera = (function (window, undefined) { return !!(window.opera && window.opera.version); /* 8.0+ */ })(window);
        r.isIE = (function (window, undefined) { return 'ActiveXObject' in window; /*return (document.all != undefined) && !self.isOpera;*/ })(window);
        r.isFirefox = (function (document, undefined) { return 'MozBoxSizing' in document.documentElement.style; /* 0.8+ */ })(document);
        r.isSafari = (function (window, undefined) { return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; /*v 3+ */ })(window);
        r.isKhtml = (function (document, undefined) { return 'KhtmlMarquee' in document.documentElement.style })(document);
        r.isOperaNext  = (function (self, navigator, undefined) { return self.isWebkit && /(Opera|OPR)/.test(navigator.userAgent); })(r, navigator);
        r.isChrome = (function (self, undefined) { return !self.isSafari && !self.isOperaNext && self.isWebkit; })(r);
        r.isEdge = (function (self, window, document, undefined) { return !('ActiveXObject' in window) && (typeof window.Event === 'function') && (typeof document.all !== 'undefined'); })(r, window, document);

        r.ieBelowVersion6 = (function (self, document, undefined) { return self.isIE && !(document.compatMode !== undefined); })(r, document);
        r.ieBelowVersion7 = (function (self, window, undefined) { return self.isIE && !(window.XMLHttpRequest !== undefined); })(r, window);
        r.ieBelowVersion8 = (function (self, document, undefined) { return self.isIE && !(document.querySelector !== undefined); })(r, document);
        r.ieBelowVersion9 = (function (self, document, undefined) { return self.isIE && !(document.addEventListener !== undefined); })(r, document);
        r.ieBelowVersion10 = (function (self, window, undefined) { return self.isIE && !(window.atob !== undefined); })(r, window);
        r.ieBelowVersion11 = (function (self, window, undefined) { return self.isIE && (window.atob !== undefined) && !(window.ActiveXObject === undefined); })(r, window);
        r.ieBelowVersion12 = (function (self, window, undefined) { return self.isIE && (typeof window.Event !== 'function'); })(r, window);

        r.ieAboveVersion5 = (function (self, window, undefined) { return self.isIE && (document.compatMode !== undefined); })(r, window);
        r.ieAboveVersion6 = (function (self, window, undefined) { return self.isIE && (window.XMLHttpRequest !== undefined); })(r, window);
        r.ieAboveVersion7 = (function (self, document, undefined) { return r.isIE && (document.querySelector !== undefined); })(r, document);
        r.ieAboveVersion8 = (function (self, window, undefined) { return self.isIE && (document.addEventListener !== undefined); })(r, window);
        r.ieAboveVersion9 = (function (self, window, undefined) { return self.isIE && (window.atob !== undefined); })(r, window);
        r.ieAboveVersion10 = (function (self, window, undefined) { return self.isIE && (window.atob !== undefined) && (window.ActiveXObject === undefined); })(r, window);
        r.ieAboveVersion11 = (function (self, window, undefined) { return self.isIE && (typeof window.Event === 'function'); })(r, window);

        r.ieIsVersion6 = (function (self, undefined) { return self.ieAboveVersion5 && self.ieBelowVersion7; })(r);
        r.ieIsVersion7 = (function (self, undefined) { return self.ieAboveVersion6 && self.ieBelowVersion8; })(r);
        r.ieIsVersion8 = (function (self, undefined) { return self.ieAboveVersion7 && self.ieBelowVersion9; })(r);
        r.ieIsVersion9 = (function (self, undefined) { return self.ieAboveVersion8 && self.ieBelowVersion10; })(r);
        r.ieIsVersion10 = (function (self, undefined) { return self.ieAboveVersion9 && self.ieBelowVersion11; })(r);
        r.ieIsVersion11 = (function (self, undefined) { return self.ieAboveVersion10 && self.isBelowVersion12; })(r);


        r.chromeIsAbove15 = (function (window, undefined) { return !!(window.chrome && window.chrome.webstore && window.chrome.webstore.install); })(window);


        r.standardsCompliant = (function (self, undefined) { return r.ieAboveVersion9; })(r);
        return r;
    })(window, document);

    tests[prefix + 'ie'] = function () { return r.detective.isIE; };
    if (!onlyie) {
        tests[prefix + 'chrome'] = function () { return r.detective.isChrome; };
        tests[prefix + 'safari'] = function () { return r.detective.isSafari; };
        tests[prefix + 'opera'] = function () { return r.detective.isOpera; };
        tests[prefix + 'opera-next'] = function() { return r.detective.isOperaNext; };
        tests[prefix + 'firefox'] = function () { return r.detective.isFirefox; };
        tests[prefix + 'khtml'] = function () { return r.detective.isKhtml; };
        tests[prefix + 'webkit'] = function () { return r.detective.isWebkit; };
        tests[prefix + 'edge'] = function () { return r.detective.isEdge; };
    }

    if (!ltoff) {
        tests[prefix + 'ie-lt-7'] = function () { return r.detective.ieBelowVersion7; };
        tests[prefix + 'ie-lt-8'] = function () { return r.detective.ieBelowVersion8; };
        tests[prefix + 'ie-lt-9'] = function () { return r.detective.ieBelowVersion9; };
        tests[prefix + 'ie-lt-10'] = function () { return r.detective.ieBelowVersion10; };
        tests[prefix + 'ie-lt-11'] = function () { return r.detective.ieBelowVersion11; };
        tests[prefix + 'ie-lt-12'] = function () { return r.detective.ieBelowVersion12; };
    }

    if (!gtoff) {
        tests[prefix + 'ie-gt-6'] = function () { return r.detective.ieAboveVersion6; };
        tests[prefix + 'ie-gt-7'] = function () { return r.detective.ieAboveVersion7; };
        tests[prefix + 'ie-gt-8'] = function () { return r.detective.ieAboveVersion8; };
        tests[prefix + 'ie-gt-9'] = function () { return r.detective.ieAboveVersion9; };
        tests[prefix + 'ie-gt-10'] = function () { return r.detective.ieAboveVersion10; };
        tests[prefix + 'ie-gt-11'] = function () { return r.detective.ieAboveVersion11; };
    }

    if (!voff) {
        tests[prefix + 'ie-version-7'] = function () { return r.detective.ieIsVersion7; };
        tests[prefix + 'ie-version-8'] = function () { return r.detective.ieIsVersion8; };
        tests[prefix + 'ie-version-9'] = function () { return r.detective.ieIsVersion9; };
        tests[prefix + 'ie-version-10'] = function () { return r.detective.ieIsVersion10; };
        tests[prefix + 'ie-version-11'] = function () { return r.detective.ieIsVersion11; };
    }

    r.version = version;

    for (var key in tests) {
        modernizr.addTest(key, tests[key]);
    }

    docElement.className = docElement.className.replace(/\bdefunctr-gt-off\b/, '');
    docElement.className = docElement.className.replace(/\bdefunctr-lt-off\b/, '');
    docElement.className = docElement.className.replace(/\bdefunctr-version-off\b/, '');
    docElement.className = docElement.className.replace(/\bdefunctr-ie-only\b/, '');

    if (!noGlobal) {
        window.defunctr = window.Defuntr = r;
    }

    return r;
}));


