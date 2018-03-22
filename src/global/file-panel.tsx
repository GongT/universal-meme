import * as React from 'react';
import { Component } from 'react';

export interface StrMap {
	[id: string]: string;
}

export interface FileConfig {
	images: StrMap;
	decorators: StrMap;
}

export class FilePanel extends Component<FileConfig> {
	state = {
		tab: 1,
	};
	
	private onClick(tab: number) {
		this.setState({tab});
	};
	
	render() {
		return <div className="switch">
			<ul className="buttons">
				<li onClick={() => this.onClick(1)}>Tab1</li>
				<li onClick={() => this.onClick(2)}>Tab2</li>
			</ul>
			<div className="tab1" style={this.isShown(1)}>
				<h1>Tab1</h1>
			</div>
			<div className="tab2" style={this.isShown(2)}>
				<h1>Tab2</h1>
			</div>
		</div>;
	}
	
	private isShown(number: number) {
		return {
			display: number === this.state.tab? 'block' : 'none',
		};
	}
}
