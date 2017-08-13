
export default document => (
  Boolean(document && typeof document.addEventListener !== 'undefined')
);
