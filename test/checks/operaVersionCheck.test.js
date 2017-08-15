import operaVersionCheck from '../../lib/checks/operaVersionCheck';
import { strictEqual } from 'assert';

describe('operaVersionCheck', () => {
	it ('validates version on window.opera', () => {
		const test = {
			opera: {
				version: ''
			}
		};
		const result = operaVersionCheck(test);
		strictEqual(result, true);
	});
})