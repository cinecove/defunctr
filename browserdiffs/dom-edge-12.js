var DOM = require('./dom-ie-11-win10.js');

DOM.source.platform.name = 'Edge';
DOM.source.plaform.version = "12";

DOM.source.mode.document = "12";
DOM.source.mode.browser = "12";

DOM.navigator.userAgent = 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136; Win64; x64)';

delete DOM.window.ActiveXObject;
DOM.window.HTMLElement = function HTMLElement() {}; // changes to function
DOM.window.Event = function Event() {}; // changes to function


// they are about to start emulating webkit vendor prefixes. THANKS MICROSOFT.

delete DOM.document.documentElement.style.accelerator;
delete DOM.document.documentElement.style.getAttribute;
delete DOM.document.documentElement.style.lineBreak;
delete DOM.document.documentElement.style.layoutFlow;
delete DOM.document.documentElement.style.layoutGrid;
delete DOM.document.documentElement.style.layoutGridChar;
delete DOM.document.documentElement.style.layoutGridLine;
delete DOM.document.documentElement.style.layoutGridMode;
delete DOM.document.documentElement.style.layoutGridType;
delete DOM.document.documentElement.style.msAnimation;
delete DOM.document.documentElement.style.msAnimationDelay;
delete DOM.document.documentElement.style.msAnimationDirection;
delete DOM.document.documentElement.style.msAnimationDuration;
delete DOM.document.documentElement.style.msAnimationFillMode;
delete DOM.document.documentElement.style.msAnimationIterationCount;
delete DOM.document.documentElement.style.msAnimationName;
delete DOM.document.documentElement.style.msAnimationPlayState;
delete DOM.document.documentElement.style.msAnimationTimingFunction;
delete DOM.document.documentElement.style.msBackfaceVisibility;
delete DOM.document.documentElement.style.msBlockProgression;
delete DOM.document.documentElement.style.msFlex;
delete DOM.document.documentElement.style.msFlexAlign;
delete DOM.document.documentElement.style.msFlexDirection;
delete DOM.document.documentElement.style.msFlexFlow;
delete DOM.document.documentElement.style.msFlexItemAlign;
delete DOM.document.documentElement.style.msFlexLinePack;
delete DOM.document.documentElement.style.msFlexNegative;
delete DOM.document.documentElement.style.msFlexOrder;
delete DOM.document.documentElement.style.msFlexPack;
delete DOM.document.documentElement.style.msFlexPositive;
delete DOM.document.documentElement.style.msFlexPreferredSize;
delete DOM.document.documentElement.style.msFlexWrap;
delete DOM.document.documentElement.style.msInterpolationMode;
delete DOM.document.documentElement.style.msPerspective;
delete DOM.document.documentElement.style.msPerspectiveOrigin;
delete DOM.document.documentElement.style.msTouchAction;
delete DOM.document.documentElement.style.msTransform;
delete DOM.document.documentElement.style.msTransformOrigin;
delete DOM.document.documentElement.style.msTransformStyle;
delete DOM.document.documentElement.style.msTransition;
delete DOM.document.documentElement.style.msTransitionDelay;
delete DOM.document.documentElement.style.msTransitionDuration;
delete DOM.document.documentElement.style.msTransitionProperty;
delete DOM.document.documentElement.style.msTransitionTimingFunction;
delete DOM.document.documentElement.style.pixelBottom;
delete DOM.document.documentElement.style.pixelHeight;
delete DOM.document.documentElement.style.pixelLeft;
delete DOM.document.documentElement.style.pixelRight;
delete DOM.document.documentElement.style.pixelTop;
delete DOM.document.documentElement.style.pixelWidth;
delete DOM.document.documentElement.style.posBottom;
delete DOM.document.documentElement.style.posHeight;
delete DOM.document.documentElement.style.posLeft;
delete DOM.document.documentElement.style.posRight;
delete DOM.document.documentElement.style.posTop;
delete DOM.document.documentElement.style.posWidth;
delete DOM.document.documentElement.style.removeAttribute;
delete DOM.document.documentElement.style.scrollbar3dLightColor;
delete DOM.document.documentElement.style.scrollbarArrowColor;
delete DOM.document.documentElement.style.scrollbarBaseColor;
delete DOM.document.documentElement.style.scrollbarDarkShadowColor;
delete DOM.document.documentElement.style.scrollbarFaceColor;
delete DOM.document.documentElement.style.scrollbarHighlightColor;
delete DOM.document.documentElement.style.scrollbarShadowColor;
delete DOM.document.documentElement.style.scrollbarTrackColor;
delete DOM.document.documentElement.style.setAttribute;
delete DOM.document.documentElement.style.styleFloat;
delete DOM.document.documentElement.style.textAutospace;
delete DOM.document.documentElement.style.textDecorationBlink;
delete DOM.document.documentElement.style.textDecorationLineThrough;
delete DOM.document.documentElement.style.textDecorationNone;
delete DOM.document.documentElement.style.textDecorationOverline;
delete DOM.document.documentElement.style.textDecorationUnderline;
delete DOM.document.documentElement.style.textJustifyTrim;


DOM.document.documentElement.style.WebkitAnimation = {};
DOM.document.documentElement.style.webkitAlignContent = {};
DOM.document.documentElement.style.webkitAlignItems = {};
DOM.document.documentElement.style.webkitAlignSelf = {};
DOM.document.documentElement.style.webkitAnimation = {};
DOM.document.documentElement.style.webkitAnimationDelay = {};
DOM.document.documentElement.style.webkitAnimationDirection = {};
DOM.document.documentElement.style.webkitAnimationDuration = {};
DOM.document.documentElement.style.webkitAnimationFillMode = {};
DOM.document.documentElement.style.webkitAnimationIterationCount = {};
DOM.document.documentElement.style.webkitAnimationName = {};
DOM.document.documentElement.style.webkitAnimationPlayState = {};
DOM.document.documentElement.style.webkitAnimationTimingFunction = {};
DOM.document.documentElement.style.webkitAppearance = {};
DOM.document.documentElement.style.webkitBackfaceVisibility = {};
DOM.document.documentElement.style.webkitBackgroundClip = {};
DOM.document.documentElement.style.webkitBackgroundOrigin = {};
DOM.document.documentElement.style.webkitBackgroundSize = {};
DOM.document.documentElement.style.webkitBorderBottomLeftRadius = {};
DOM.document.documentElement.style.webkitBorderBottomRightRadius = {};
DOM.document.documentElement.style.webkitBorderImage = {};
DOM.document.documentElement.style.webkitBorderRadius = {};
DOM.document.documentElement.style.webkitBorderTopLeftRadius = {};
DOM.document.documentElement.style.webkitBorderTopRightRadius = {};
DOM.document.documentElement.style.webkitBoxAlign = {};
DOM.document.documentElement.style.webkitBoxDirection = {};
DOM.document.documentElement.style.webkitBoxFlex = {};
DOM.document.documentElement.style.webkitBoxOrdinalGroup = {};
DOM.document.documentElement.style.webkitBoxOrient = {};
DOM.document.documentElement.style.webkitBoxPack = {};
DOM.document.documentElement.style.webkitBoxSizing = {};
DOM.document.documentElement.style.webkitColumnBreakAfter = {};
DOM.document.documentElement.style.webkitColumnBreakBefore = {};
DOM.document.documentElement.style.webkitColumnBreakInside = {};
DOM.document.documentElement.style.webkitColumnCount = {};
DOM.document.documentElement.style.webkitColumnGap = {};
DOM.document.documentElement.style.webkitColumnRule = {};
DOM.document.documentElement.style.webkitColumnRuleColor = {};
DOM.document.documentElement.style.webkitColumnRuleStyle = {};
DOM.document.documentElement.style.webkitColumnRuleWidth = {};
DOM.document.documentElement.style.webkitColumnSpan = {};
DOM.document.documentElement.style.webkitColumnWidth = {};
DOM.document.documentElement.style.webkitColumns = {};
DOM.document.documentElement.style.webkitFilter = {};
DOM.document.documentElement.style.webkitFlex = {};
DOM.document.documentElement.style.webkitFlexBasis = {};
DOM.document.documentElement.style.webkitFlexDirection = {};
DOM.document.documentElement.style.webkitFlexFlow = {};
DOM.document.documentElement.style.webkitFlexGrow = {};
DOM.document.documentElement.style.webkitFlexShrink = {};
DOM.document.documentElement.style.webkitFlexWrap = {};
DOM.document.documentElement.style.webkitJustifyContent = {};
DOM.document.documentElement.style.webkitOrder = {};
DOM.document.documentElement.style.webkitPerspective = {};
DOM.document.documentElement.style.webkitPerspectiveOrigin = {};
DOM.document.documentElement.style.webkitTapHighlightColor = {};
DOM.document.documentElement.style.webkitTextFillColor = {};
DOM.document.documentElement.style.webkitTextSizeAdjust = {};
DOM.document.documentElement.style.webkitTransform = {};
DOM.document.documentElement.style.webkitTransformOrigin = {};
DOM.document.documentElement.style.webkitTransformStyle = {};
DOM.document.documentElement.style.webkitTransition = {};
DOM.document.documentElement.style.webkitTransitionDelay = {};
DOM.document.documentElement.style.webkitTransitionDuration = {};
DOM.document.documentElement.style.webkitTransitionProperty = {};
DOM.document.documentElement.style.webkitTransitionTimingFunction = {};
DOM.document.documentElement.style.webkitUserModify = {};
DOM.document.documentElement.style.webkitUserSelect = {};
DOM.document.documentElement.style.webkitWritingMode = {};


DOM.window.chrome = {
  app: {}
}

module.exports = DOM;
