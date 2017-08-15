import webkitTransformCheck from '../../lib/checks/webkitTransformCheck';
import { strictEqual } from 'assert';

describe('webkitTransformCheck', () => {
	it ('validates WebkitTransform on window.document.documentElement.style', () => {
		const test = {
			document: {
				documentElement: {
					style: {
						WebkitTransform: {}
					}
				}
			}
		};
		const result = webkitTransformCheck(test.document);
		strictEqual(result, true);
	});
})