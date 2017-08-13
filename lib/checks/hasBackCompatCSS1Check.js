// BackCompat is QuirksMode
// CSS1Compat is Standards Mode

export default document => (
  Boolean((document && document.compatMode) && (document.compatMode === 'CSS1Compat' || document.compatMode === 'BackCompat'))
);
