import hasXmlHttpRequestCheck from '../../lib/checks/hasXmlHttpRequestCheck';
import { strictEqual } from 'assert';

describe('hasXmlHttpRequestCheck', () => {
	it ('validates XMLHttpRequest on window', () => {
		const test = {
			XMLHttpRequest: {}
		};
		const result = hasXmlHttpRequestCheck(test);
		strictEqual(result, true);
	});
})