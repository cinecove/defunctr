/*!
 * Defunctr 1.3.1
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2017 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2017-08-14T02:37:48.958Z
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.defunctr=n()}(this,function(){"use strict";function e(){try{return"WebkitTransform"in E.documentElement.style&&!!c.opr&&!!c.opr.addons}catch(e){return!1}}function n(e){return function(){return e}}function i(e,n){Modernizr?Modernizr.addTest(e,n):r(n()?e:"no-"+e)}function o(e){se.className=se.className.replace(new RegExp("\\b"+e+"\\b"),"")}function r(e){t(e)||(se.className+=se.className.length>0?" "+e:e)}function t(e){return se.className.match(new RegExp("\\b"+e+"\\b"))}function s(e){t(oe.NOTAGGING)||(i(re(ie.IE),n(e.isIE)),t(oe.IE_ONLY)||(i(re(ie.CHROME),n(e.isChrome)),i(re(ie.SAFARI),n(e.isSafari)),i(re(ie.OPERA),n(e.isOpera)),i(re(ie.OPERANEXT),n(e.isOperaNext)),i(re(ie.FIREFOX),n(e.isFirefox)),i(re(ie.KHTML),n(e.isKhtml)),i(re(ie.WEBKIT),n(e.isWebKit)),i(re(ie.EDGE),n(e.isEdge)),i(re(ie.UNKNOWN),n(e.isUndetected))),t(oe.IE_LESSTHAN_OFF)||(i(re(ie.IE_LESSTHAN_6),n(e.ieIsBelowVersion6)),i(re(ie.IE_LESSTHAN_7),n(e.ieIsBelowVersion7)),i(re(ie.IE_LESSTHAN_8),n(e.ieIsBelowVersion8)),i(re(ie.IE_LESSTHAN_9),n(e.ieIsBelowVersion9)),i(re(ie.IE_LESSTHAN_10),n(e.ieIsBelowVersion10)),i(re(ie.IE_LESSTHAN_11),n(e.ieIsBelowVersion11)),i(re(ie.IE_LESSTHAN_12),n(e.ieIsBelowVersion12))),t(oe.IE_GREATERTHAN_OFF)||(i(re(ie.IE_GREATERTHAN_6),n(e.ieIsAboveVersion6)),i(re(ie.IE_GREATERTHAN_7),n(e.ieIsAboveVersion7)),i(re(ie.IE_GREATERTHAN_8),n(e.ieIsAboveVersion8)),i(re(ie.IE_GREATERTHAN_9),n(e.ieIsAboveVersion9)),i(re(ie.IE_GREATERTHAN_10),n(e.ieIsAboveVersion10)),i(re(ie.IE_GREATERTHAN_11),n(e.ieIsAboveVersion11))),t(oe.VERSION_OFF)||(i(re(ie.IE_VERSION_6),n(e.ieIsVersion6)),i(re(ie.IE_VERSION_7),n(e.ieIsVersion7)),i(re(ie.IE_VERSION_8),n(e.ieIsVersion8)),i(re(ie.IE_VERSION_9),n(e.ieIsVersion9)),i(re(ie.IE_VERSION_10),n(e.ieIsVersion10)),i(re(ie.IE_VERSION_11),n(e.ieIsVersion11)))),u()}function u(){o(oe.IE_GREATERTHAN_OFF),o(oe.IE_LESSTHAN_OFF),o(oe.VERSION_OFF),o(oe.IE_ONLY),o(oe.DEFUNCTR),o(oe.NOTAGGING)}var c=window||null,E=c?c.document||null:null,f=function(){},I=c&&c.console?c.console:undefined,l=I?I.log||f:f,a={log:l,warn:I?I.warn||l:f,error:I?I.error||l:f},d=function(){return Boolean(c&&c.HTMLElement&&Object.prototype.toString.call(c.HTMLElement).indexOf("Constructor")>0)},V=function(){return d()},_=function(){return e()},A=function(){return Boolean(E&&E.documentElement&&E.documentElement.style&&"WebkitTransform"in E.documentElement.style)},m=function(){return Boolean(c&&"undefined"!=typeof c.msWriteProfilerMark)},N=function(){return Boolean(c&&"undefined"!=typeof c.InstallTrigger)},T=function(){return N()},b=function(){return Boolean(c&&c.opera&&void 0!==c.opera.version)},h=function(){return b()},w=function(){return A()&&!1===m()&&!T()&&!h()},R=function(){return!V()&&!_()&&w()},S=function(){return"ActiveXObject"in c},v=function(){return Boolean(c&&c.Event&&"function"==typeof c.Event)},O=function(){return Boolean(!S()&&v()&&m())},p=function(){return Boolean(E&&E.documentElement&&E.documentElement.style&&"KhtmlMarquee"in E.documentElement.style)},B=function(){return p()&&!V()},H=function(){return S()},y=function(){return!(w()||H()||R()||O()||T()||h()||_()||V())},F=function(){return Boolean(E&&E.compatMode&&("CSS1Compat"===E.compatMode||"BackCompat"===E.compatMode))},g=function(){return H()&&F()},G=function(){return Boolean(c&&"undefined"!=typeof c.XMLHttpRequest)},L=function(){return H()&&F()&&G()},M=function(){return Boolean(E&&"undefined"!=typeof E.querySelector)},C=function(){return H()&&M()},x=function(){return Boolean(E&&"undefined"!=typeof E.addEventListener)},K=function(){return H()&&x()},z=function(){return Boolean(c&&"undefined"!=typeof c.atob)},k=function(){return H()&&z()},W=function(){return Boolean(E&&"undefined"!=typeof E.attachEvent)},j=function(){return H()&&z()&&!W()},P=function(){return Boolean(E&&"undefined"!=typeof E.compatMode)},D=function(){return Boolean(E&&E.compatMode&&"BackCompat"===E.compatMode)},U=function(){return H()&&!D()&&!G()},X=function(){return H()&&!M()},q=function(){return H()&&!x()},Y=function(){return H()&&!z()},J=function(){return H()&&W()},Q=function(){return H()&&!v()},Z=function(){return Boolean(c&&c.chrome&&c.chrome.webstore&&c.chrome.webstore.install)},$={ie:(Object.freeze||Object)({isAboveVersion5:g,isAboveVersion6:L,isAboveVersion7:C,isAboveVersion8:K,isAboveVersion9:k,isAboveVersion10:j,isAboveVersion11:function(){return H()&&v()},isBelowVersion6:function(){return H()&&!P()},isBelowVersion7:U,isBelowVersion8:X,isBelowVersion9:q,isBelowVersion10:Y,isBelowVersion11:J,isBelowVersion12:Q,isVersion6:function(){return g()&&U()},isVersion7:function(){return L()&&X()},isVersion8:function(){return C()&&q()},isVersion9:function(){return K()&&Y()},isVersion10:function(){return k()&&J()},isVersion11:function(){return j()&&Q()}}),chrome:(Object.freeze||Object)({isAboveVersion15:function(){return R()&&Z()}})},ee=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},ne=function Ee(){ee(this,Ee),this.isWebKit=w(),this.isOpera=h(),this.isIE=H(),this.isFirefox=T(),this.isSafari=V(),this.isKhtml=B(),this.isOperaNext=_(),this.isChrome=R(),this.isEdge=O(),this.isUndetected=y(),this.standardsCompliant=$.ie.isAboveVersion9()||!H(),this.chromeIsAbove15=$.chrome.isAboveVersion15(),this.ieIsVersion11=$.ie.isVersion11(),this.ieIsVersion10=$.ie.isVersion10(),this.ieIsVersion9=$.ie.isVersion9(),this.ieIsVersion8=$.ie.isVersion8(),this.ieIsVersion7=$.ie.isVersion7(),this.ieIsVersion6=$.ie.isVersion6(),this.ieIsBelowVersion6=$.ie.isBelowVersion6(),this.ieIsBelowVersion7=$.ie.isBelowVersion7(),this.ieIsBelowVersion8=$.ie.isBelowVersion8(),this.ieIsBelowVersion9=$.ie.isBelowVersion9(),this.ieIsBelowVersion10=$.ie.isBelowVersion10(),this.ieIsBelowVersion11=$.ie.isBelowVersion11(),this.ieIsBelowVersion12=$.ie.isBelowVersion12(),this.ieIsAboveVersion5=$.ie.isAboveVersion5(),this.ieIsAboveVersion6=$.ie.isAboveVersion6(),this.ieIsAboveVersion7=$.ie.isAboveVersion7(),this.ieIsAboveVersion8=$.ie.isAboveVersion8(),this.ieIsAboveVersion9=$.ie.isAboveVersion9(),this.ieIsAboveVersion10=$.ie.isAboveVersion10(),this.ieIsAboveVersion11=$.ie.isAboveVersion11()},ie={IE:"ie",CHROME:"chrome",SAFARI:"safari",OPERA:"opera",OPERANEXT:"opera-next",FIREFOX:"firefox",KHTML:"khtml",WEBKIT:"webkit",EDGE:"edge",UNKNOWN:"undetected-browser",IE_LESSTHAN_6:"ie-lt-6",IE_LESSTHAN_7:"ie-lt-7",IE_LESSTHAN_8:"ie-lt-8",IE_LESSTHAN_9:"ie-lt-9",IE_LESSTHAN_10:"ie-lt-10",IE_LESSTHAN_11:"ie-lt-11",IE_LESSTHAN_12:"ie-lt-12",IE_GREATERTHAN_6:"ie-gt-6",IE_GREATERTHAN_7:"ie-gt-7",IE_GREATERTHAN_8:"ie-gt-8",IE_GREATERTHAN_9:"ie-gt-9",IE_GREATERTHAN_10:"ie-gt-10",IE_GREATERTHAN_11:"ie-gt-11",IE_VERSION_6:"ie-version-6",IE_VERSION_7:"ie-version-7",IE_VERSION_8:"ie-version-8",IE_VERSION_9:"ie-version-9",IE_VERSION_10:"ie-version-10",IE_VERSION_11:"ie-version-11"},oe={DEFUNCTR:"defunctr",VERSION_OFF:"defunctr-version-off",IE_ONLY:"defunctr-ie-only",IE_LESSTHAN_OFF:"defunctr-lt-off",IE_GREATERTHAN_OFF:"defunctr-gt-off",NOTAGGING:"defunctr-off"},re=function(e){return""+e},te={modernizr:undefined};"function"==typeof require?require(["modernizr"],function(e){te.modernizr=e}):c&&(c.Modernizr?te.modernizr=c.Modernizr:c.modernizr&&(te.modernizr=c.modernizr));var se=E&&E.documentElement&&E.documentElement.className?E.documentElement:{className:""},Modernizr=te.modernizr,ue=new function fe(){ee(this,fe),this.version="1.3.1",this.browser=function(){var e=new ne;return{vendor:e.isChrome?"chrome":e.isEdge?"edge":e.isFirefox?"firefox":e.isIE?"ie":e.isKhtml?"khtml":e.isOpera&&e.isOperaNext?"opera":e.isSafari?"safari":"unknown",version:e.isIE?e.ieIsBelowVersion6?5:e.ieIsVersion6?6:e.ieIsVersion7?7:e.ieIsVersion8?8:e.ieIsVersion9?9:e.ieIsVersion10?10:e.ieIsVersion11?11:e.ieIsAboveVersion11?12:0:0,standards:e.standardsCompliant,detected:!e.isUndetected,webkit:e.isWebKit}}};try{Object.defineProperty(ue,"detective",{get:function(){try{(a&&a.warn?a.warn:a.log)("defunctr.detective is deprecated and will be removed in 2.0. Please use window.browser instead.")}catch(e){}return new ne},enumerable:!0,configurable:!0})}catch(ce){ue.detective=new ne}if(c){(function(e){return{tag:function(){E&&s(e)}}})(new ne).tag(),c.defunctr=ue;try{Object.defineProperty(c,"Defunctr",{get:function(){try{(a&&a.warn?a.warn:a.log)("window.Defunctr is deprecated and will be removed in 2.0. Please use window.defunctr instead.")}catch(e){}return ue},enumerable:!0,configurable:!0})}catch(ce){c.Defunctr=ue}}return ue});