import installTriggerCheck from '../../lib/checks/installTriggerCheck';
import { strictEqual } from 'assert';

describe('installTriggerCheck', () => {
	it ('validates InstallTrigger on window', () => {
		const test = {
			InstallTrigger: {}
		};
		const result = installTriggerCheck(test);
		strictEqual(result, true);
	});
})