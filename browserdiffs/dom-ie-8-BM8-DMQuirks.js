var DOM = require('./dom-ie-8.js');

DOM.source.mode.document = "Quirks";
DOM.source.mode.browser = "8";

delete DOM.document.querySelector;
delete DOM.window.Event;

DOM.document.compatMode = 'BackCompat';

module.exports = DOM;
