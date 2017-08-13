
export default document => (
  Boolean(document && typeof document.attachEvent !== 'undefined')
);
