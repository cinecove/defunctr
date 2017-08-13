
export default window => (
  Boolean(window && typeof window.atob !== 'undefined')
);
