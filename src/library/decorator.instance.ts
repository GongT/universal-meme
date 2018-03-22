import { loadDecorator } from './decorator.loader';
import { Decorator } from './decorator';
import { globalState } from './state-storage.instance';

let currentDecorator: Decorator<any, any>;

function switchDecorator(url: string) {
	return loadDecorator(url).then((dec) => {
		currentDecorator = dec;
	});
}

export function getCurrentDecorator() {
	return currentDecorator;
}

globalState.listen('decorator', (old, url) => {
	switchDecorator(url).catch((e) => {
		console.log('load decorator: ', e.message);
		alert('can not load url: ' + url + ' as decorator');
	});
});
