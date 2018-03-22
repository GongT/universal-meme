import * as $ from 'jquery';

const padding = 60;
const $mainCanvas = $('#MainCanvas');
const $stage = $('.mainStage');

export function onWindowResize() {
	const w = $stage.width() - (padding * 2);
	const h = $stage.height() - (padding * 2);
	$mainCanvas.attr({
		height: h,
		width: w,
	});
	$mainCanvas.css({
		height: h,
		width: w,
	});
	
	// redraw
}
