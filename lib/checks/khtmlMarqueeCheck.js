
export default document => (
  Boolean(document && document.documentElement && document.documentElement.style && 'KhtmlMarquee' in document.documentElement.style)
);
