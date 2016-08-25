var DOM = require('./dom-ie-10.js');

DOM.source.browser.version = '11';

DOM.source.mode.document = "11";
DOM.source.mode.browser = "11";

DOM.navigator.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; rv:11.0) like Gecko';

delete DOM.document.all;
delete DOM.window.ActiveXObject;

DOM.document.documentElement.style.alignContent = {};
DOM.document.documentElement.style.alignItems = {};
DOM.document.documentElement.style.alignSelf = {};
DOM.document.documentElement.style.borderImage = {};
DOM.document.documentElement.style.borderImageOutset = {};
DOM.document.documentElement.style.borderImageRepeat = {};
DOM.document.documentElement.style.borderImageSlice = {};
DOM.document.documentElement.style.borderImageSource = {};
DOM.document.documentElement.style.borderImageWidth = {};
DOM.document.documentElement.style.flex = {};
DOM.document.documentElement.style.flexBasis = {};
DOM.document.documentElement.style.flexDirection = {};
DOM.document.documentElement.style.flexFlow = {};
DOM.document.documentElement.style.flexGrow = {};
DOM.document.documentElement.style.flexShrink = {};
DOM.document.documentElement.style.flexWrap = {};
DOM.document.documentElement.style.justifyContent = {};
DOM.document.documentElement.style.msImeAlign = {};
DOM.document.documentElement.style.msTextCombineHorizontal = {};
DOM.document.documentElement.style.order = {};
DOM.document.documentElement.style.touchAction = {};

delete DOM.document.documentElement.style.behavior;


module.exports = DOM;
