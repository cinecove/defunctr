
export default window => (
  Boolean(window && typeof window.Event === 'function')
);

