var source = {
  platform: {
    name: 'none',
    version: 'none'
  },
  browser: {
    name: 'none',
    version: 'none'
  },
  mode: {
    browser: 'none',
    document: 'none'
  }
}

var document = {
  documentElement: {
    className: '',
    style: {}
  },
  compatMode: ''
};

var window = {};

var navigator = {
  userAgent: 'unknown'
};

module.exports = {
  document: document,
  window: window,
  navigator: navigator,
  source: source
};
