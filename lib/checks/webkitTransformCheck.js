
export default document => (
  Boolean(document && document.documentElement && document.documentElement.style && 'WebkitTransform' in document.documentElement.style)
);
