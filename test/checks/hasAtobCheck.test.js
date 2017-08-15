import hasAtobCheck from '../../lib/checks/hasAtobCheck';
import { strictEqual } from 'assert';

describe('hasAtobCheck', () => {
	it ('validates atob on window', () => {
		const test = {
			atob: () => {}
		};
		const result = hasAtobCheck(test);
		strictEqual(result, true);
	});
});
