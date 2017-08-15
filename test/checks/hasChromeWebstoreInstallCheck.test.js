import hasChromeWebstoreInstallCheck from '../../lib/checks/hasChromeWebstoreInstallCheck';
import { strictEqual } from 'assert';

describe('hasChromeWebstoreInstallCheck', () => {
	it ('validates install on window.chrome.webstore', () => {
		const test = {
			chrome: {
				webstore: {
					install: {}
				}
			}
		};
		const result = hasChromeWebstoreInstallCheck(test);
		strictEqual(result, true);
	});
})