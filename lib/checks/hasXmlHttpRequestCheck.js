
export default window => (
  Boolean(window && typeof window.XMLHttpRequest !== 'undefined')
);