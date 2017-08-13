
export default window => (
  Boolean(window && window.chrome && window.chrome.webstore && window.chrome.webstore.install)
);
