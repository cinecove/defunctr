var DOM = require('./dom-ie-8.js');


DOM.source.mode.document = "Quirks";
DOM.source.mode.browser = "8 Compatability";

DOM.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)';

DOM.document.compatMode = 'BackCompat';

delete DOM.document.querySelector;
delete DOM.window.Event;

module.exports = DOM;
