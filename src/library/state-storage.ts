///<reference types="node"/>

import { EventEmitter } from 'events';

export interface EventCallback<T, K extends keyof T> {
	(oldValue: T[K], newValue: T[K]): void;
}

export class GlobalStateStorage<T extends {[id: string]: any}> extends EventEmitter {
	protected store: Partial<T> = {};
	
	completeReplace(newStore: T) {
		for (const item of Object.keys(this.store)) {
			this.set(item, this.store[item]);
		}
	}
	
	get<K extends keyof T>(name: K): T[K] {
		return this.store[name];
	}
	
	listen<K extends keyof T>(event: K, callback: EventCallback<T, K>) {
	
	}
	
	set<K extends keyof T>(name: K, value: T[K]) {
		const oldValue = this.store[name];
		if (oldValue !== value) {
			this.emit(name, oldValue, value);
			this.store[name] = value;
		}
	}
	
	sleep() {
		return JSON.stringify(this.store);
	}
	
	wakeup(saved: string) {
		let data: any;
		try {
			data = JSON.parse(saved);
		} catch (e) {
			console.error('storage::wakeup error - %s', e.stack);
		}
		this.completeReplace(data);
	}
}
