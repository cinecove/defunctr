import hasBackCompatCSS1Check from '../../lib/checks/hasBackCompatCSS1Check';
import { strictEqual } from 'assert';

describe('hasBackCompatCSS1Check', () => {
	it ('validates compatMode = CSS1Compat on window.document', () => {
		const test = {
			document: {
				compatMode: 'CSS1Compat'
			}
		};
		const result = hasBackCompatCSS1Check(test.document);
		strictEqual(result, true);
	});
	it ('validates compatMode = BackCompat on window.document', () => {
		const test = {
			document: {
				compatMode: 'BackCompat'
			}
		};
		const result = hasBackCompatCSS1Check(test.document);
		strictEqual(result, true);
	});
})