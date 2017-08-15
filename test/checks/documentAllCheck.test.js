import documentAllCheck from '../../lib/checks/documentAllCheck';
import { strictEqual } from 'assert';

describe('documentAllCheck', () => {
	it ('validates all on window.document', () => {
		const test = {
			document: {
				all: {}
			}
		};
		const result = documentAllCheck(test.document);
		strictEqual(result, true);
	});
});
