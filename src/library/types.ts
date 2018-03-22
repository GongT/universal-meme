export enum KnownDecorator {
	simpleSubtitle = 1,
	boom = 2,
}

export interface GlobalState {
	arguments: any;
	baseImage: string;
	decorator: string;
}
