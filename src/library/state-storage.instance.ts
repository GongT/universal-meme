import { GlobalState } from './types';
import { GlobalStateStorage } from './state-storage';
import * as $ from 'jquery';

export const globalState = new GlobalStateStorage<GlobalState>();

if (localStorage.currentState) {
	globalState.wakeup(localStorage.currentState);
} else {
	globalState.completeReplace({
		arguments: {},
		baseImage: '/preset/sorry.gif',
		decorator: '/preset/subtitle.json',
	});
}

$(window).on('unload', () => {
	localStorage.currentState = globalState.sleep();
});
