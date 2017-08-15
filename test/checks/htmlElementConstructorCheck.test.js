/*import htmlElementConstructorCheck from '../../lib/checks/htmlElementConstructorCheck';
import { strictEqual } from 'assert';

const HTMLElementConstructor = function HTMLElementConstructor () {
	this.name = 'HTMLElementConstructor';
};
HTMLElementConstructor.prototype.toString = function () {
	return 'HTMLElementConstructor';
};

describe('htmlElementConstructorCheck', () => {
	it ('validates Constructor on window.HTMLElement', () => {
		const test = {
			HTMLElement: new HTMLElementConstructor()
		};
		//test.HtmlElement.prototype.toString = () => ('[object HTMLElementConstructor]');
		console.log(test.HTMLElement.constructor.name);
		console.log(Object.prototype.toString.call(test.HTMLElement));
		const result = htmlElementConstructorCheck(test);
		strictEqual(result, true);
	});
});
*/