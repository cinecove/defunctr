import mozBoxSizingCheck from '../../lib/checks/mozBoxSizingCheck';
import { strictEqual } from 'assert';

describe('mozBoxSizingCheck', () => {
	it ('validates MozBoxSizing on window.document.documentElement.style', () => {
		const test = {
			document: {
				documentElement: {
					style: {
						MozBoxSizing: ''
					}
				}
			}
		};
		const result = mozBoxSizingCheck(test.document);
		strictEqual(result, true);
	});
})