
export default window => (
  Boolean(window && window.Event && (typeof window.Event === 'function'))
);
