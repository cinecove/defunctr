
export default document => (
  Boolean(document && typeof document.querySelector !== 'undefined')
);
