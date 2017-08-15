import activeXCheck from '../../lib/checks/activeXCheck';
import { strictEqual } from 'assert';

describe('activeXCheck', () => {
	it ('validates ActiveX on window', () => {
		const test = {
			ActiveXObject: {}
		};
		const result = activeXCheck(test);
		strictEqual(result, true);
	});
})