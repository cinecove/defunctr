import hasCompatModeCheck from '../../lib/checks/hasCompatModeCheck';
import { strictEqual } from 'assert';

describe('hasCompatModeCheck', () => {
	it ('validates compatMode on window.document', () => {
		const test = {
			document: {
				compatMode: ''
			}
		};
		const result = hasCompatModeCheck(test.document);
		strictEqual(result, true);
	});
})