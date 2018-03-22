import * as $ from 'jquery';
import { onWindowResize } from './global/stage-resize';

import * as React from 'react';
import { render } from 'react-dom';
import { ConfigPanel } from './global/config-panel';
import { FilePanel } from './global/file-panel';

onWindowResize();
$(window).on('resize', onWindowResize);

render(
	React.createElement(ConfigPanel),
	$('.rightPanel')[0],
);

render(
	React.createElement(FilePanel),
	$('.leftPanel')[0],
);

