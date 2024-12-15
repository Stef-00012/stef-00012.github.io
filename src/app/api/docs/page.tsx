import type { Metadata } from "next";
import { redirect } from "next/navigation";

export function generateMetadata(): Metadata {
	return {
		title: "API Docs",
		description:
			"This API is used to communicate with Stef's apps or to get data about them",
		openGraph: {
			title: "API Docs",
			description:
				"This API is used to communicate with Stef's apps or to get data about them",
		},
		twitter: {
			title: "API Docs",
			description:
				"This API is used to communicate with Stef's apps or to get data about them",
		},
	};
}

export default function Socials() {
	redirect("https://docs.stefdp.lol");
}
