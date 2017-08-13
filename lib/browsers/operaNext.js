/*
 * HACK: This function needs to be refactored to include a dom test
 */

const hasOperaHeader = (window, document) => {
  //return Boolean((navigator && navigator.userAgent) && /(Opera|OPR)/.test(navigator.userAgent));
  try {
    return 'WebkitTransform' in document.documentElement.style && (!!window.opr && !!window.opr.addons);
  } catch (ex) {
    return false;
  }
};

export default (window, document) => (
  hasOperaHeader(window, document)
);
