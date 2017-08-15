import hasQuerySelectorCheck from '../../lib/checks/hasQuerySelectorCheck';
import { strictEqual } from 'assert';

describe('hasQuerySelectorCheck', () => {
	it ('validates querySelector on window.document', () => {
		const test = {
			document: {
				querySelector: () => {}
			}
		};
		const result = hasQuerySelectorCheck(test.document);
		strictEqual(result, true);
	});
})