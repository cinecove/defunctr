var DOM = require('./dom-ie-6.js');

DOM.source.browser.version = '7';
DOM.source.mode.document = "7";
DOM.source.mode.browser = "7";

DOM.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)';

DOM.document.compatMode = 'CSS1Compat';

DOM.window.XMLHttpRequest = {};

DOM.document.documentElement.style.maxHeight = {};
DOM.document.documentElement.style.maxWidth = {};
DOM.document.documentElement.style.minWidth = {};
DOM.document.documentElement.style.msInterpolationMode = {};

module.exports = DOM;
