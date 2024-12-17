import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { socials } from "@/data/socials";

import type { Metadata } from "next";

interface Data {
	params: Promise<{
		social: string;
	}>;
}

type Props = {
	params: Promise<{ social: string }>;
};

import React from "react";

export async function generateMetadata(
	{ params }: Props
): Promise<Metadata> {
	const socialName = (await params).social;

	const selectedSocial = socials.find((social) => social.id === socialName);

	if (!selectedSocial) return {};

	return {
		openGraph: {
			title: `My Own Bio :) - ${selectedSocial.name}`,
			description: `My ${selectedSocial.name} Profile - ${selectedSocial.username}`,
		},
		twitter: {
			title: `My Own Bio :) - ${selectedSocial.name}`,
			description: `My ${selectedSocial.name} Profile - ${selectedSocial.username}`,
		},
		title: `My Own Bio :) - ${selectedSocial.name}`,
		description: `My ${selectedSocial.name} Profile - ${selectedSocial.username}`,
	};
}

export default function Socials({ params }: Data) {
	const { social: socialName } = React.use(params);

	const selectedSocial = socials.find((social) => social.id === socialName);

	if (!selectedSocial) return notFound();

	redirect(selectedSocial.url);
}
