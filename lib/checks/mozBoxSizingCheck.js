
export default document => (
  Boolean(document && document.documentElement && document.documentElement.style && 'MozBoxSizing' in document.documentElement.style)
);
