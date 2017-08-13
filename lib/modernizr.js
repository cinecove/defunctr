const optionalModernizr = {
  modernizr: undefined
}

const createStub = window => {
  if (typeof require === 'function') {
    require(['modernizer'], function (m) {
      optionalModernizr.modernizr = m;
    });
  } else {
    if (window) {
      if (window.Modernizr) {
        optionalModernizr.modernizr = window.Modernizr;
      } else if (window.modernizr) {
        optionalModernizr.modernizr = window.modernizr;
      }
    }
  }
  return optionalModernizr;
}

export default window => (createStub(window));