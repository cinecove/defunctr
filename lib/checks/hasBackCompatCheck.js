
export default document => (
  Boolean(document && document.compatMode && document.compatMode === 'BackCompat')
);
