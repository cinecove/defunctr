
const mapVendor = detector => {
	if (detector.isIE) { return 'ie'}
	if (detector.isOpera || detector.isOperaNext) { return 'opera' }
	if (detector.isChrome) { return 'chrome' }
	if (detector.isEdge) { return 'edge' }
	if (detector.isSafari) { return 'safari' }
	if (detector.isFirefox) { return 'firefox' }
	if (detector.isKhtml) { return 'khtml' }
	return 'unknown';
};

const mapVersion = detector => {
	if (detector.isIE) {
		if (detector.ieIsBelowVersion6) { return 5; }
		if (detector.ieIsVersion6) { return 6; }
		if (detector.ieIsVersion7) { return 7; }
		if (detector.ieIsVersion8) { return 8; }
		if (detector.ieIsVersion9) { return 9; }
		if (detector.ieIsVersion10) { return 10; }
		if (detector.ieIsVersion11) { return 11; }
		if (detector.ieIsAboveVersion11) { return 12; }
	}
	return 0;
};

export default (detector) => () => {
	const d = detector();
	return {
		vendor: mapVendor(d),
		webkit: d.isWebKit,
		detected: !d.isUndetected,
		version: mapVersion(d),
		standards: d.standardsCompliant,
	};
};