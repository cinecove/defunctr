import khtmlMarqueeCheck from '../../lib/checks/khtmlMarqueeCheck';
import { strictEqual } from 'assert';

describe('khtmlMarqueeCheck', () => {
	it ('validates KhtmlMarquee on window.document.documentElement.style', () => {
		const test = {
			document: {
				documentElement: {
					style: {
						KhtmlMarquee: ''
					}
				}
			}
		};
		const result = khtmlMarqueeCheck(test.document);
		strictEqual(result, true);
	});
})