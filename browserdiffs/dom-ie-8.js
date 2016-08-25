var DOM = require('./dom-ie-7.js');

DOM source.platform.version = '7';
DOM.source.browser.version = '8';

DOM.source.mode.document = "8";
DOM.source.mode.browser = "8";

DOM.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)';

DOM.document.compatMode = 'CSS1Compat';

DOM.window.Event = {}; // <!-- danger

DOM.window.msWriteProfilerMark = function msWriteProfilerMark() {};

DOM.document.querySelector = function querySelector() {};
DOM.window.XMLHttpRequest = {};


DOM.document.documentElement.style.borderSpacing = {};
DOM.document.documentElement.style.boxSizing = {};
DOM.document.documentElement.style.captionSide = {};
DOM.document.documentElement.style.content = {};
DOM.document.documentElement.style.counterIncrement = {};
DOM.document.documentElement.style.counterReset = {};
DOM.document.documentElement.style.emptyCells = {};
DOM.document.documentElement.style.msBlockProgression = {};     // gone in edge
DOM.document.documentElement.style.orphans = {};
DOM.document.documentElement.style.outline = {};
DOM.document.documentElement.style.outlineColor = {};
DOM.document.documentElement.style.outlineStyle = {};
DOM.document.documentElement.style.outlineWidth = {};
DOM.document.documentElement.style.pageBreakInside = {};
DOM.document.documentElement.style.quotes = {};
DOM.document.documentElement.style.widows = {}; // <- yes widows NOT windows


module.exports = DOM;
