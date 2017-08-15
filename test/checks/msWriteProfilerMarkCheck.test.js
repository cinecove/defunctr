import msWriteProfilerMarkCheck from '../../lib/checks/msWriteProfilerMarkCheck';
import { strictEqual } from 'assert';

describe('msWriteProfilerMarkCheck', () => {
	it ('validates msWriteProfilerMark on window', () => {
		const test = {
			msWriteProfilerMark: {}
		};
		const result = msWriteProfilerMarkCheck(test);
		strictEqual(result, true);
	});
})