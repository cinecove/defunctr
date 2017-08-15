import attachEventCheck from '../../lib/checks/attachEventCheck';
import { strictEqual } from 'assert';

describe('attachEventCheck', () => {
	it ('validates attachEvent on window.document', () => {
		const test = {
			document: {
				attachEvent: () => {}
			}
		};
		const result = attachEventCheck(test.document);
		strictEqual(result, true);
	});
});
