
export default window => (
  Boolean(window && typeof window.InstallTrigger !== 'undefined')
);

