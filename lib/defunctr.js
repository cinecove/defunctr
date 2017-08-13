import detective from './detective';
import tagger from './tagger';
import browser from './browser';

const message = 'defunctr.detective is deprecated and will be removed in version 3.0. Please use defunctr.browser instead.';

const deprecateStaticDetector = (defunctr, detective) => {
  try {
    Object.defineProperty(defunctr, 'detective', {
      get: () => {
        if (console) {
          if (console.warn) {
            console.warn(message);
          } else if (console.log) {
            console.log(message);
          }
        }
        return detective();
      },
      enumerable: true,
      configurable: true,
    });
  } catch (ex) {
    defunctr.detective = detective();
  }
}

export default window => {
  const w = window;
  const d = window && window.document ? window.document : undefined;
  const det = detective(w, d);
  const t = tagger(det, w, d);

  const defunctr = {
    version: '@@version',
    name: 'defunctr',
    tag: t.tag,
    browser: browser(det),
  };
  deprecateStaticDetector(defunctr, det);

  return defunctr;
};
