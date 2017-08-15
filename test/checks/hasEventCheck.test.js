import hasEventCheck from '../../lib/checks/hasEventCheck';
import { strictEqual } from 'assert';

describe('hasEventCheck', () => {
	it ('validates Event on window', () => {
		const test = {
			Event: () => {}
		};
		const result = hasEventCheck(test);
		strictEqual(result, true);
	});
})