
export default document => (
  Boolean(document && typeof document.compatMode !== 'undefined')
);
