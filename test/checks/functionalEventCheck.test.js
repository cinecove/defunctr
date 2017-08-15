import functionalEventCheck from '../../lib/checks/functionalEventCheck';
import { strictEqual } from 'assert';

describe('functionalEventCheck', () => {
	it ('validates Event (function) on window', () => {
		const test = {
			Event: () => {}
		};
		const result = functionalEventCheck(test);
		strictEqual(result, true);
	});
});
