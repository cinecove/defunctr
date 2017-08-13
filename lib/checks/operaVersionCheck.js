
export default window => (
  Boolean(window && window.opera && (window.opera.version !== undefined))
);
