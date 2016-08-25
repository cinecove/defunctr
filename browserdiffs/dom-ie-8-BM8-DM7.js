var DOM = require('./dom-ie-8.js');

DOM.source.mode.document = "7";
DOM.source.mode.browser = "8";

delete DOM.document.querySelector;
delete DOM.window.Event;

module.exports = DOM;
