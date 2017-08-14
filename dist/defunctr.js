/*!
 * Defunctr 2.0.0
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2017 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2017-08-14T08:14:29.991Z
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.defunctr=n()}(this,function(){"use strict";var e=function(e){return Boolean(e&&e.HTMLElement&&Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor")>0)},n=function(n){return e(n)},i=function(e,n){try{return"WebkitTransform"in n.documentElement.style&&!!e.opr&&!!e.opr.addons}catch(i){return!1}},o=function(e,n){return i(e,n)},r=function(e){return Boolean(e&&e.documentElement&&e.documentElement.style&&"WebkitTransform"in e.documentElement.style)},t=function(e){return Boolean(e&&"undefined"!=typeof e.msWriteProfilerMark)},s=function(e){return Boolean(e&&"undefined"!=typeof e.InstallTrigger)},u=function(e){return s(e)},f=function(e){return Boolean(e&&e.opera&&e.opera.version!==undefined)},E=function(e){return f(e)},c=function(e,n){return r(n)&&!t(e)&&!u(e)&&!E(e)},I=function(e,i){return!n(e)&&!o(e,i)&&c(e,i)},l=function(e){return Boolean("ActiveXObject"in e)},d=function(e){return Boolean(e&&e.Event&&"function"==typeof e.Event)},V=function(e){return!l(e)&&d(e)&&t(e)},a=function(e){return Boolean(e&&e.documentElement&&e.documentElement.style&&"KhtmlMarquee"in e.documentElement.style)},_=function(e,i){return a(i)&&!n(e)},A=function(e){return l(e)},m=function(e,i){return!(c(e,i)||A(e)||I(e,i)||V(e)||u(e)||E(e)||o(e,i)||n(e))},N=function(e){return Boolean(e&&e.compatMode&&("CSS1Compat"===e.compatMode||"BackCompat"===e.compatMode))},T=function(e,n){return A(e)&&N(n)},b=function(e){return Boolean(e&&"undefined"!=typeof e.XMLHttpRequest)},S=function(e,n){return A(e)&&N(n)&&b(e)},R=function(e){return Boolean(e&&"undefined"!=typeof e.querySelector)},p=function(e,n){return A(e)&&R(n)},v=function(e){return Boolean(e&&"undefined"!=typeof e.addEventListener)},O=function(e,n){return A(e)&&v(n)},B=function(e){return Boolean(e&&"undefined"!=typeof e.atob)},w=function(e){return A(e)&&B(e)},H=function(e){return Boolean(e&&"undefined"!=typeof e.attachEvent)},y=function(e,n){return A(e)&&B(e)&&!H(n)},F=function(e){return Boolean(e&&"undefined"!=typeof e.compatMode)},G=function(e){return Boolean(e&&e.compatMode&&"BackCompat"===e.compatMode)},L=function(e,n){return A(e)&&!G(n)&&!b(e)},g=function(e,n){return A(e)&&!R(n)},h=function(e,n){return A(e)&&!v(n)},M=function(e){return A(e)&&!B(e)},x=function(e,n){return A(e)&&H(n)},C=function(e){return A(e)&&!d(e)},K=function(e){return Boolean(e&&e.chrome&&e.chrome.webstore&&e.chrome.webstore.install)},z={ie:(Object.freeze||Object)({isAboveVersion5:T,isAboveVersion6:S,isAboveVersion7:p,isAboveVersion8:O,isAboveVersion9:w,isAboveVersion10:y,isAboveVersion11:function(e){return A(e)&&d(e)},isBelowVersion6:function(e,n){return A(e)&&!F(n)},isBelowVersion7:L,isBelowVersion8:g,isBelowVersion9:h,isBelowVersion10:M,isBelowVersion11:x,isBelowVersion12:C,isVersion6:function(e,n){return T(e,n)&&L(e,n)},isVersion7:function(e,n){return S(e,n)&&g(e,n)},isVersion8:function(e,n){return p(e,n)&&h(e,n)},isVersion9:function(e,n){return O(e,n)&&M(e)},isVersion10:function(e,n){return w(e)&&x(e,n)},isVersion11:function(e,n){return y(e,n)&&C(e)}}),chrome:(Object.freeze||Object)({isAboveVersion15:function(e,n){return I(e,n)&&K(e)}})},k=function(e,i){return function(){return{isWebKit:c(e,i),isOpera:E(e),isIE:A(e),isFirefox:u(e),isSafari:n(e),isKhtml:_(e,i),isOperaNext:o(e,i),isChrome:I(e,i),isEdge:V(e),isUndetected:m(e,i),standardsCompliant:z.ie.isAboveVersion9(e)||!A(e),chromeIsAbove15:z.chrome.isAboveVersion15(e,i),ieIsVersion11:z.ie.isVersion11(e,i),ieIsVersion10:z.ie.isVersion10(e,i),ieIsVersion9:z.ie.isVersion9(e,i),ieIsVersion8:z.ie.isVersion8(e,i),ieIsVersion7:z.ie.isVersion7(e,i),ieIsVersion6:z.ie.isVersion6(e,i),ieIsBelowVersion6:z.ie.isBelowVersion6(e,i),ieIsBelowVersion7:z.ie.isBelowVersion7(e,i),ieIsBelowVersion8:z.ie.isBelowVersion8(e,i),ieIsBelowVersion9:z.ie.isBelowVersion9(e,i),ieIsBelowVersion10:z.ie.isBelowVersion10(e,i),ieIsBelowVersion11:z.ie.isBelowVersion11(e,i),ieIsBelowVersion12:z.ie.isBelowVersion12(e,i),ieIsAboveVersion5:z.ie.isAboveVersion5(e,i),ieIsAboveVersion6:z.ie.isAboveVersion6(e,i),ieIsAboveVersion7:z.ie.isAboveVersion7(e,i),ieIsAboveVersion8:z.ie.isAboveVersion8(e,i),ieIsAboveVersion9:z.ie.isAboveVersion9(e,i),ieIsAboveVersion10:z.ie.isAboveVersion10(e,i),ieIsAboveVersion11:z.ie.isAboveVersion11(e,i)}}},W={IE:"ie",CHROME:"chrome",SAFARI:"safari",OPERA:"opera",OPERANEXT:"opera-next",FIREFOX:"firefox",KHTML:"khtml",WEBKIT:"webkit",EDGE:"edge",UNKNOWN:"undetected-browser",IE_LESSTHAN_6:"ie-lt-6",IE_LESSTHAN_7:"ie-lt-7",IE_LESSTHAN_8:"ie-lt-8",IE_LESSTHAN_9:"ie-lt-9",IE_LESSTHAN_10:"ie-lt-10",IE_LESSTHAN_11:"ie-lt-11",IE_LESSTHAN_12:"ie-lt-12",IE_GREATERTHAN_6:"ie-gt-6",IE_GREATERTHAN_7:"ie-gt-7",IE_GREATERTHAN_8:"ie-gt-8",IE_GREATERTHAN_9:"ie-gt-9",IE_GREATERTHAN_10:"ie-gt-10",IE_GREATERTHAN_11:"ie-gt-11",IE_VERSION_6:"ie-version-6",IE_VERSION_7:"ie-version-7",IE_VERSION_8:"ie-version-8",IE_VERSION_9:"ie-version-9",IE_VERSION_10:"ie-version-10",IE_VERSION_11:"ie-version-11"},j="defunctr",U={DEFUNCTR:j,VERSION_OFF:j+"-version-off",IE_ONLY:j+"-ie-only",IE_LESSTHAN_OFF:j+"-lt-off",IE_GREATERTHAN_OFF:j+"-gt-off",NOTAGGING:j+"-off"},X=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";return function(n){return""+e+n}},q={modernizr:undefined},P=function(e){return"function"==typeof require?require(["modernizer"],function(e){q.modernizr=e}):e&&(e.Modernizr?q.modernizr=e.Modernizr:e.modernizr&&(q.modernizr=e.modernizr)),q},D=function(e){return P(e)},Y=function(e){return e&&e.documentElement&&e.documentElement.className?e.documentElement:{className:""}},J=function(e,n){return e.className.match(new RegExp("\\b"+n+"\\b"))},Q=function(e,n){e.className=e.className.replace(new RegExp("\\b"+n+"\\b"),"")},Z=function(e,n){J(e,n)||(e.className+=e.className.length>0?" "+n:"")},$=function(e){Q(e,U.IE_GREATERTHAN_OFF),Q(e,U.IE_LESSTHAN_OFF),Q(e,U.VERSION_OFF),Q(e,U.IE_ONLY),Q(e,U.DEFUNCTR),Q(e,U.NOTAGGING)},ee=function(e){return function(){return e}},ne=function(e,n){return function(i,o){n?n.addTest(i,o):o()?Z(e,i):Z(e,"no-"+i)}},ie=function(e,n,i){var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"",r=Y(n),t=ne(r,i),s=X(o);J(r,U.NOTAGGING)||(t(s(W.IE),ee(e.isIE)),J(r,U.IE_ONLY)||(t(s(W.CHROME),ee(e.isChrome)),t(s(W.SAFARI),ee(e.isSafari)),t(s(W.OPERA),ee(e.isOpera)),t(s(W.OPERANEXT),ee(e.isOperaNext)),t(s(W.FIREFOX),ee(e.isFirefox)),t(s(W.KHTML),ee(e.isKhtml)),t(s(W.WEBKIT),ee(e.isWebKit)),t(s(W.EDGE),ee(e.isEdge)),t(s(W.UNKNOWN),ee(e.isUndetected))),J(r,U.IE_LESSTHAN_OFF)||(t(s(W.IE_LESSTHAN_6),ee(e.ieIsBelowVersion6)),t(s(W.IE_LESSTHAN_7),ee(e.ieIsBelowVersion7)),t(s(W.IE_LESSTHAN_8),ee(e.ieIsBelowVersion8)),t(s(W.IE_LESSTHAN_9),ee(e.ieIsBelowVersion9)),t(s(W.IE_LESSTHAN_10),ee(e.ieIsBelowVersion10)),t(s(W.IE_LESSTHAN_11),ee(e.ieIsBelowVersion11)),t(s(W.IE_LESSTHAN_12),ee(e.ieIsBelowVersion12))),J(r,U.IE_GREATERTHAN_OFF)||(t(s(W.IE_GREATERTHAN_6),ee(e.ieIsAboveVersion6)),t(s(W.IE_GREATERTHAN_7),ee(e.ieIsAboveVersion7)),t(s(W.IE_GREATERTHAN_8),ee(e.ieIsAboveVersion8)),t(s(W.IE_GREATERTHAN_9),ee(e.ieIsAboveVersion9)),t(s(W.IE_GREATERTHAN_10),ee(e.ieIsAboveVersion10)),t(s(W.IE_GREATERTHAN_11),ee(e.ieIsAboveVersion11))),J(r,U.VERSION_OFF)||(t(s(W.IE_VERSION_6),ee(e.ieIsVersion6)),t(s(W.IE_VERSION_7),ee(e.ieIsVersion7)),t(s(W.IE_VERSION_8),ee(e.ieIsVersion8)),t(s(W.IE_VERSION_9),ee(e.ieIsVersion9)),t(s(W.IE_VERSION_10),ee(e.ieIsVersion10)),t(s(W.IE_VERSION_11),ee(e.ieIsVersion11))),$(r))},oe=function(e,n,i){return{tag:function(){var o=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";if(i){var r=e();ie(r,i,D(n).modernizr,o)}}}},re=function(e){return e.isIE?"ie":e.isOpera||e.isOperaNext?"opera":e.isChrome?"chrome":e.isEdge?"edge":e.isSafari?"safari":e.isFirefox?"firefox":e.isKhtml?"khtml":"unknown"},te=function(e){if(e.isIE){if(e.ieIsBelowVersion6)return 5;if(e.ieIsVersion6)return 6;if(e.ieIsVersion7)return 7;if(e.ieIsVersion8)return 8;if(e.ieIsVersion9)return 9;if(e.ieIsVersion10)return 10;if(e.ieIsVersion11)return 11;if(e.ieIsAboveVersion11)return 12}return 0},se=function(e){return function(){var n=e();return{vendor:re(n),webkit:n.isWebKit,detected:!n.isUndetected,version:te(n),standards:n.standardsCompliant}}},ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window&&window.console&&window.console;return function(e,n){if(n){var i=e(n);return i.tag(""),n.defunctr=i,"object"===("undefined"==typeof exports?"undefined":ue(exports))&&"undefined"!=typeof module?e:i}}(function(e){var n=e,i=e&&e.document?e.document:undefined,o=k(n,i);return{version:"2.0.0",name:"defunctr",tag:oe(o,n,i).tag,browser:se(o)}},window)});