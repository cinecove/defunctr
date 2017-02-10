/*!
 * Defunctr 1.3.0-beta2
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2017 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2017-02-10T04:04:24.425Z
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.defunctr=n()}(this,function(){"use strict";function e(){try{return"WebkitTransform"in c.documentElement.style&&0===E.clientInformation.vendor.substring("Opera")}catch(e){return!1}}function n(e){return function(){return e}}function i(e,n){Modernizr?Modernizr.addTest(e,n):t(n()?e:"no-"+e)}function o(e){Te.className=Te.className.replace(new RegExp("\\b"+e+"\\b"),"")}function t(e){r(e)||(Te.className+=Te.className.length>0?" "+e:e)}function r(e){return Te.className.match(new RegExp("\\b"+e+"\\b"))}function s(e){r(Ae.NOTAGGING)||(i(me(ae.IE),n(e.isIE)),r(Ae.IE_ONLY)||(i(me(ae.CHROME),n(e.isChrome)),i(me(ae.SAFARI),n(e.isSafari)),i(me(ae.OPERA),n(e.isOpera)),i(me(ae.OPERANEXT),n(e.isOperaNext)),i(me(ae.FIREFOX),n(e.isFirefox)),i(me(ae.KHTML),n(e.isKhtml)),i(me(ae.WEBKIT),n(e.isWebKit)),i(me(ae.EDGE),n(e.isEdge)),i(me(ae.UNKNOWN),n(e.isUndetected))),r(Ae.IE_LESSTHAN_OFF)||(i(me(ae.IE_LESSTHAN_6),n(e.ieBelowVersion6)),i(me(ae.IE_LESSTHAN_7),n(e.ieBelowVersion7)),i(me(ae.IE_LESSTHAN_8),n(e.ieBelowVersion8)),i(me(ae.IE_LESSTHAN_9),n(e.ieBelowVersion9)),i(me(ae.IE_LESSTHAN_10),n(e.ieBelowVersion10)),i(me(ae.IE_LESSTHAN_11),n(e.ieBelowVersion11)),i(me(ae.IE_LESSTHAN_12),n(e.ieBelowVersion12))),r(Ae.IE_GREATERTHAN_OFF)||(i(me(ae.IE_GREATERTHAN_6),n(e.ieAboveVersion6)),i(me(ae.IE_GREATERTHAN_7),n(e.ieAboveVersion7)),i(me(ae.IE_GREATERTHAN_8),n(e.ieAboveVersion8)),i(me(ae.IE_GREATERTHAN_9),n(e.ieAboveVersion9)),i(me(ae.IE_GREATERTHAN_10),n(e.ieAboveVersion10)),i(me(ae.IE_GREATERTHAN_11),n(e.ieAboveVersion11))),r(Ae.VERSION_OFF)||(i(me(ae.IE_VERSION_6),n(e.ieIsVersion6)),i(me(ae.IE_VERSION_7),n(e.ieIsVersion7)),i(me(ae.IE_VERSION_8),n(e.ieIsVersion8)),i(me(ae.IE_VERSION_9),n(e.ieIsVersion9)),i(me(ae.IE_VERSION_10),n(e.ieIsVersion10)),i(me(ae.IE_VERSION_11),n(e.ieIsVersion11)))),u()}function u(){o(Ae.IE_GREATERTHAN_OFF),o(Ae.IE_LESSTHAN_OFF),o(Ae.VERSION_OFF),o(Ae.IE_ONLY),o(Ae.DEFUNCTR),o(Ae.NOTAGGING)}var E=window||null,c=E?E.document||null:null,f=void 0,l=function(){},I=E&&E.console?E.console:void 0,V=I?I.log||l:l,_=I?I.warn||V:l,a=I?I.error||V:l,A={log:V,warn:_,error:a},d=function(){return Boolean(E&&E.HTMLElement&&Object.prototype.toString.call(E.HTMLElement).indexOf("Constructor")>0)},m=function(){return d()},N=function(){return e()},T=function(){return Boolean(c&&c.documentElement&&c.documentElement.style&&"WebkitTransform"in c.documentElement.style)},R=function(){return Boolean(E&&"undefined"!=typeof E.msWriteProfilerMark)},S=function(){return T()&&R()===!1},b=function(){return Boolean(c&&c.documentElement&&c.documentElement.style&&"MozBoxSizing"in c.documentElement.style)},h=function(){return b()},O=function(){return!m()&&!N()&&!h()&&S()},v=function(){return"ActiveXObject"in E},w=function(){return Boolean(E&&E.Event&&"function"==typeof E.Event)},B=function(){return Boolean(!v()&&w()&&R())},p=function(){return Boolean(c&&c.documentElement&&c.documentElement.style&&"KhtmlMarquee"in c.documentElement.style)},H=function(){return p()},F=function(){return Boolean(E&&E.opera&&E.opera.version!==f)},G=function(){return F()},L=function(){return v()},y=function(){return!(S()||L()||O()||B()||h()||G()||N()||m())},g=function(){return Boolean(c&&c.compatMode&&"CSS1Compat"===c.compatMode)},M=function(){return L()&&g()},z=function(){return Boolean(E&&"undefined"!=typeof E.XMLHttpRequest)},x=function(){return Boolean(c&&c.compatMode&&"BackCompat"===c.compatMode)},C=function(){return L()&&x()&&!z()},K=function(){return Boolean(c&&"undefined"!=typeof c.querySelector)},W=function(){return L()&&K()},j=function(){return Boolean(c&&"undefined"!=typeof c.addEventListener)},D=function(){return L()&&j()},P=function(){return Boolean(E&&"undefined"!=typeof E.atob)},k=function(){return L()&&P()},U=function(){return L()&&P()&&!v()},X=function(){return L()&&w()},q=function(){return Boolean(c&&"undefined"!=typeof c.compatMode)},Y=function(){return L()&&!q()},J=function(){return L()&&!x()&&!z()},Q=function(){return L()&&!K()},Z=function(){return L()&&!j()},$=function(){return L()&&!P()},ee=function(){return L()&&!P()&&v()},ne=function(){return L()&&!w()},ie=function(){return M()&&J()},oe=function(){return C()&&Q()},te=function(){return W()&&Z()},re=function(){return D()&&$()},se=function(){return k()&&ee()},ue=function(){return U()&&ne()},Ee=(Object.freeze||Object)({isAboveVersion5:M,isAboveVersion6:C,isAboveVersion7:W,isAboveVersion8:D,isAboveVersion9:k,isAboveVersion10:U,isAboveVersion11:X,isBelowVersion6:Y,isBelowVersion7:J,isBelowVersion8:Q,isBelowVersion9:Z,isBelowVersion10:$,isBelowVersion11:ee,isBelowVersion12:ne,isVersion6:ie,isVersion7:oe,isVersion8:te,isVersion9:re,isVersion10:se,isVersion11:ue}),ce=function(){return Boolean(E&&E.chrome&&E.chrome.webstore&&E.chrome.webstore.install)},fe=function(){return O()&&ce()},le=(Object.freeze||Object)({isAboveVersion15:fe}),Ie={ie:Ee,chrome:le},Ve=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},_e=function e(){Ve(this,e),this.isWebKit=S(),this.isOpera=G(),this.isIE=L(),this.isFirefox=h(),this.isSafari=m(),this.isKhtml=H(),this.isOperaNext=N(),this.isChrome=O(),this.isEdge=B(),this.isUndetected=y(),this.standardsCompliant=Ie.ie.isAboveVersion9()||!L(),this.chromeIsAbove15=Ie.chrome.isAboveVersion15(),this.ieIsVersion11=Ie.ie.isVersion11(),this.ieIsVersion10=Ie.ie.isVersion10(),this.ieIsVersion9=Ie.ie.isVersion9(),this.ieIsVersion8=Ie.ie.isVersion8(),this.ieIsVersion7=Ie.ie.isVersion7(),this.ieIsVersion6=Ie.ie.isVersion6(),this.ieIsBelowVersion6=Ie.ie.isBelowVersion6(),this.ieIsBelowVersion7=Ie.ie.isBelowVersion7(),this.ieIsBelowVersion8=Ie.ie.isBelowVersion8(),this.ieIsBelowVersion9=Ie.ie.isBelowVersion9(),this.ieIsBelowVersion10=Ie.ie.isBelowVersion10(),this.ieIsBelowVersion11=Ie.ie.isBelowVersion11(),this.ieIsBelowVersion12=Ie.ie.isBelowVersion12(),this.ieIsAboveVersion5=Ie.ie.isAboveVersion5(),this.ieIsAboveVersion6=Ie.ie.isAboveVersion6(),this.ieIsAboveVersion7=Ie.ie.isAboveVersion7(),this.ieIsAboveVersion8=Ie.ie.isAboveVersion8(),this.ieIsAboveVersion9=Ie.ie.isAboveVersion9(),this.ieIsAboveVersion10=Ie.ie.isAboveVersion10(),this.ieIsAboveVersion11=Ie.ie.isAboveVersion11()},ae={IE:"ie",CHROME:"chrome",SAFARI:"safari",OPERA:"opera",OPERANEXT:"opera-next",FIREFOX:"firefox",KHTML:"khtml",WEBKIT:"webkit",EDGE:"edge",UNKNOWN:"undetected-browser",IE_LESSTHAN_6:"ie-lt-6",IE_LESSTHAN_7:"ie-lt-7",IE_LESSTHAN_8:"ie-lt-8",IE_LESSTHAN_9:"ie-lt-9",IE_LESSTHAN_10:"ie-lt-10",IE_LESSTHAN_11:"ie-lt-11",IE_LESSTHAN_12:"ie-lt-12",IE_GREATERTHAN_6:"ie-gt-6",IE_GREATERTHAN_7:"ie-gt-7",IE_GREATERTHAN_8:"ie-gt-8",IE_GREATERTHAN_9:"ie-gt-9",IE_GREATERTHAN_10:"ie-gt-10",IE_GREATERTHAN_11:"ie-gt-11",IE_VERSION_6:"ie-verion-6",IE_VERSION_7:"ie-version-7",IE_VERSION_8:"ie-version-8",IE_VERSION_9:"ie-version-9",IE_VERSION_10:"ie-version-10",IE_VERSION_11:"ie-version-11"},Ae={DEFUNCTR:"defunctr",VERSION_OFF:"defunctr-version-off",IE_ONLY:"defunctr-ie-only",IE_LESSTHAN_OFF:"defunctr-lt-off",IE_GREATERTHAN_OFF:"defunctr-gt-off",NOTAGGING:"defunctr-off"},de="",me=function(e){return""+de+e},Ne={modernizr:void 0};"function"==typeof require?require(["modernizr"],function(e){Ne.modernizr=e}):E&&(E.Modernizr?Ne.modernizr=E.Modernizr:E.modernizr&&(Ne.modernizr=E.modernizr));var Te=c&&c.documentElement&&c.documentElement.className?c.documentElement:{className:""},Modernizr=Ne.modernizr,Re=function(e){return{tag:function(){c&&s(e)}}},Se=function e(){Ve(this,e),this.version="1.3.0-beta2",this.detective=new _e},be=new Se;if(E){Re(new _e).tag(),E.defunctr=be;try{Object.defineProperty(E,"Defunctr",{get:function(){return A.warn("window.Defunctr is deprecated and will be removed. Please use window.defunctr"),be},enumerable:!0,configurable:!0})}catch(e){E.Defunctr=be}}return be});