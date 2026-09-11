export interface GuideSection {
	title: string;
	body: string;
}

export interface GameGuide {
	slug: string;
	url: string;
	gameId: string;
	gameName: string;
	title: string;
	description: string;
	intro: string;
	sections: GuideSection[];
	closingSentence: string;
	anchorText: string;
	image: string;
	publishedAt: string;
	isExternal: boolean;
}

export interface NativeGuide {
	slug: string;
	title: string;
	description: string;
	href: string;
	image: string;
}
