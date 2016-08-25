var DOM = require('./dom-ie-8.js');

DOM.source.platform.version = '7';
DOM.source.browser.version = '9';

DOM.source.mode.document = "9";
DOM.source.mode.browser = "9";

DOM.navigator.userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E) ';

DOM.window.HTMLElement = {};
DOM.window.XMLHttpRequest = function XMLHttpRequest() {}; // changes to a function

DOM.document.addEventListener = function addEventListener() {};

DOM.document.documentElement.style.alignmentBaseline = {};
DOM.document.documentElement.style.backgroundClip = {};
DOM.document.documentElement.style.backgroundOrigin = {};
DOM.document.documentElement.style.backgroundSize = {};
DOM.document.documentElement.style.baselineShift = {};
DOM.document.documentElement.style.borderBottomLeftRadius = {};
DOM.document.documentElement.style.borderBottomRightRadius = {};
DOM.document.documentElement.style.borderRadius = {};
DOM.document.documentElement.style.borderTopLeftRadius = {};
DOM.document.documentElement.style.borderTopRightRadius = {};
DOM.document.documentElement.style.boxShadow = {};
DOM.document.documentElement.style.clipPath = {};
DOM.document.documentElement.style.clipRule = {};
DOM.document.documentElement.style.cssFloat = {};
DOM.document.documentElement.style.dominantBaseline = {};
DOM.document.documentElement.style.fill = {};
DOM.document.documentElement.style.fillOpacity = {};
DOM.document.documentElement.style.fillRule = {};
DOM.document.documentElement.style.fontSizeAdjust = {};
DOM.document.documentElement.style.fontStretch = {};
DOM.document.documentElement.style.getAttribute = function getAttribute() {} ;
DOM.document.documentElement.style.getPropertyPriority = function getPropertyPriority() {} ;
DOM.document.documentElement.style.getPropertyValue = function getPropertyValue() {} ;
DOM.document.documentElement.style.glyphOrientationHorizontal = {};
DOM.document.documentElement.style.glyphOrientationVertical = {};
DOM.document.documentElement.style.item = function item() {} ;
DOM.document.documentElement.style.kerning = {};
DOM.document.documentElement.style.length = {};
DOM.document.documentElement.style.marker = {};
DOM.document.documentElement.style.markerEnd = {};
DOM.document.documentElement.style.markerMid = {};
DOM.document.documentElement.style.markerStart = {};
DOM.document.documentElement.style.mask = {};
DOM.document.documentElement.style.msTransform = {};
DOM.document.documentElement.style.msTransformOrigin = {};
DOM.document.documentElement.style.opacity = {};
DOM.document.documentElement.style.parentRule = {};
DOM.document.documentElement.style.pixelBottom = {};
DOM.document.documentElement.style.pixelHeight = {};
DOM.document.documentElement.style.pixelLeft = {};
DOM.document.documentElement.style.pixelRight = {};
DOM.document.documentElement.style.pixelTop = {};
DOM.document.documentElement.style.pixelWidth = {};
DOM.document.documentElement.style.pointerEvents = {};
DOM.document.documentElement.style.removeAttribute = function removeAttribute() {} ;
DOM.document.documentElement.style.removeProperty = function removeProperty() {} ;
DOM.document.documentElement.style.setAttribute = function setAttribute() {} ;
DOM.document.documentElement.style.setProperty = function setProperty() {} ;
DOM.document.documentElement.style.stopColor = {};
DOM.document.documentElement.style.stopOpacity = {};
DOM.document.documentElement.style.stroke = {};
DOM.document.documentElement.style.strokeDasharray = {};
DOM.document.documentElement.style.strokeDashoffset = {};
DOM.document.documentElement.style.strokeLinecap = {};
DOM.document.documentElement.style.strokeLinejoin = {};
DOM.document.documentElement.style.strokeMiterlimit = {};
DOM.document.documentElement.style.strokeOpacity = {};
DOM.document.documentElement.style.strokeWidth = {};
DOM.document.documentElement.style.textAnchor = {};

module.exports = DOM;
