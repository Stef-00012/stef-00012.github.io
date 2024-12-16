export interface AlternativeLink {
	style: React.CSSProperties;
	type: "link" | "mail";
	image: string;
	name: string;
	url: string;
}

export interface MainLink {
	name: string;
	url: string;
}