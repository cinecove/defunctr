
export default window => (
  Boolean(window && typeof window.msWriteProfilerMark !== 'undefined')
);
