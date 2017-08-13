
export default window => (
  Boolean(window && window.HTMLElement && (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0))
);
