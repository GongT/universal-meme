///<reference types="jquery"/>

import { ReactNode } from 'react';
import { KnownDecorator } from './types';

export abstract class Decorator<ConfigType, ArgType> {
	private config: ConfigType&{url: string};
	protected abstract type: KnownDecorator;
	
	constructor(config: ConfigType&{url: string}) {
		this.assertConfig(config);
		this.config = config;
	}
	
	toJSON() {
		return {
			type: this.type, config: this.config,
		};
	}
	
	protected abstract assertConfig(config: ConfigType) ;
	
	protected abstract renderConfigPanel(): ReactNode;
	
	protected abstract renderResultImage(args: ArgType): any;
}
