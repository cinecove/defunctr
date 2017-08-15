import hasAddEventListenerCheck from '../../lib/checks/hasAddEventListenerCheck';
import { strictEqual } from 'assert';

describe('hasAddEventListenerCheck', () => {
	it ('validates addEventListener on window.document', () => {
		const test = {
			document: {
				addEventListener: () => {}
			}
		};
		const result = hasAddEventListenerCheck(test.document);
		strictEqual(result, true);
	});
});
