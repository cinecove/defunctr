/* @flow */
'use strict';

const browserWindow = window || null;
const browserNavigator = navigator || null;
const browserDocument = browserWindow ? browserWindow.document || null : null;
const undef = void(0);

const noop = function () {};
const console = browserWindow && typeof browserWindow.console !== undefined ? browserWindow.console : { log: noop, warn: noop, error: noop };
const log = console ? console.log || noop : noop;
const warn = console ? console.warn || log : noop;
const error = console ? console.error || log : noop;

const logger = {
  log: log,
  warn: warn,
  error: error
};

export {
  browserWindow as window,
  browserNavigator as navigator,
  browserDocument as document,
  undef as undefined,
  logger as console,
  noop
}

export default {
  window: browserWindow,
  navigator: browserNavigator,
  document: browserDocument,
  'undefined': undef,
  console: logger,
  noop: noop
}
