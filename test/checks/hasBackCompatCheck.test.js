import hasBackCompatCheck from '../../lib/checks/hasBackCompatCheck';
import { strictEqual } from 'assert';

describe('hasBackCompatCheck', () => {
	it ('validates compatMode = BackCompat on window.document', () => {
		const test = {
			document: {
				compatMode: 'BackCompat'
			}
		};
		const result = hasBackCompatCheck(test.document);
		strictEqual(result, true);
	});
})