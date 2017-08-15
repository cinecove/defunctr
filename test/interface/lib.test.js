//import mlog from 'mocha-logger';
import Defunctr from '../../lib/defunctr';
import { strictEqual } from 'assert';

describe('lib interface checks', () => {
	it ('exports from defunctr in lib', () => {
		const test = typeof Defunctr === 'function';
		strictEqual(test, true);
	});

	it ('returns an object on create', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr === 'object';
		strictEqual(test, true);
	});

	it ('defunctr has a version property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.version === 'string';
		strictEqual(test, true);
	});

	it ('defunctr has a name property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.name === 'string';
		strictEqual(test, true);
	});

	it ('defunctr has a tag method', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.tag === 'function';
		strictEqual(test, true);
	});

	it ('defunctr has a browser method', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser === 'function';
		strictEqual(test, true);
	});

	it ('defunctr has a browser method', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser === 'function';
		strictEqual(test, true);
	});

	it ('defunctr browser method has a vendor property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser().vendor === 'string';
		strictEqual(test, true);
	});

	it ('defunctr browser method has a webkit property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser().webkit === 'boolean';
		strictEqual(test, true);
	});

	it ('defunctr browser method has a detected property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser().detected === 'boolean';
		strictEqual(test, true);
	});

	it ('defunctr browser method has a version property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser().version === 'number';
		strictEqual(test, true);
	});

	it ('defunctr browser method has a standards property', () => {
		const defunctr = Defunctr({ document: {} });
		const test = typeof defunctr.browser().standards === 'boolean';
		strictEqual(test, true);
	});

	it ('defunctr tag method populates classes', () => {
		const win = { 
			document: { 
				documentElement: { 
					className: '' 
				} 
			} 
		};
		const defunctr = Defunctr(win);
		defunctr.tag();
		//mlog.log(JSON.stringify(win));
		const test = win.document.documentElement.className.length > 0;
		strictEqual(test, true);
	});
})