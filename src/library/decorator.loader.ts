import { Decorator } from './decorator';
import { KnownDecorator } from './types';
import { BoomDecorator } from './decorators/boom.decorator';
import { SimpleSubtitleDecorator } from './decorators/simple-subtitle.decorator';

if (!window.hasOwnProperty('fetch')) {
	alert('你的浏览器太鸡儿老了，更新一下吧。');
}

async function get(url: string) {
	const resp = await fetch(url, {
		credentials: 'omit',
		mode: 'cors',
		redirect: 'follow',
	});
	const data = (await resp.text()).trim();
	if (/^{/.test(data)) {
		return JSON.parse(data);
	} else {
		throw new Error(`unknown response type from ${url}.`);
	}
}

interface ConfigFile<ConfigType> {
	config: ConfigType;
	type: KnownDecorator|string;
}

export function getDecoratorClass<ConfigType, ArgType>(type: KnownDecorator, config: ConfigType): Decorator<ConfigType, ArgType> {
	switch (type) {
	case KnownDecorator.boom:
		return new BoomDecorator(config);
	case KnownDecorator.simpleSubtitle:
		return new SimpleSubtitleDecorator(config);
	default:
		throw new TypeError(`Unknown type of Decorator: ${type}`);
	}
}

export async function loadDecorator<ConfigType, ArgType>(url: string): Promise<Decorator<ConfigType, ArgType>> {
	const fileContent: ConfigFile<ConfigType> = await get(url);
	let {config, type} = fileContent;
	
	if (typeof type === 'string') {
		type = KnownDecorator[type];
	}
	if (!type) {
		throw new TypeError(`Decorator config file must have a "type".`);
	}
	
	const configWithUrl: ConfigType&{url: string} = Object.assign({}, config, {
		url,
	});
	
	return getDecoratorClass(type as KnownDecorator, configWithUrl);
}
