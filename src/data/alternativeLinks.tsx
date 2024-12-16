import type { AlternativeLink } from "@/types/links";
import { baseUrl } from "./constants";

export const alterativeLinks: Array<AlternativeLink> = [
	{
		name: "Discord",
		image: "/images/socialLogos/discordLogo.webp",
		url: `${baseUrl}/socials/discord`,
		type: "link",
		style: {
			color: "#5865F2",
		},
	},
	{
		name: "Twitch",
		image: "/images/socialLogos/twitchLogo.webp",
		url: `${baseUrl}/socials/twitch`,
		type: "link",
		style: {
			color: "#823FE6",
		},
	},
	{
		name: "Instagram",
		image: "/images/socialLogos/instagram.webp",
		url: `${baseUrl}/socials/instagram`,
		type: "link",
		style: {
			background:
				"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
			WebkitBackgroundClip: "text",
			MozBackgroundClip: "text",
			backgroundClip: "text",
			WebkitTextFillColor: "transparent",
		},
	},
	{
		name: "Threads",
		image: "/images/socialLogos/threads.webp",
		url: `${baseUrl}/socials/threads`,
		type: "link",
		style: {
			color: "#d3d3d3",
		},
	},
	{
		name: "GitHub",
		image: "/images/socialLogos/github.webp",
		url: `${baseUrl}/socials/github`,
		type: "link",
		style: {
			color: "#a7a7a7",
		},
	},
	{
		name: "Telegram",
		image: "/images/socialLogos/telegramLogo.webp",
		url: `${baseUrl}/socials/telegram`,
		type: "link",
		style: {
			color: "#268EC3",
		},
	},
	{
		name: "YouTube",
		image: "/images/socialLogos/youtubeLogo.webp",
		url: `${baseUrl}/socials/youtube`,
		type: "link",
		style: {
			color: "#E60000",
		},
	},
	{
		name: "X (Twitter)",
		image: "/images/socialLogos/twitter.webp",
		url: `${baseUrl}/socials/x`,
		type: "link",
		style: {
			color: "#1A8CD8",
		},
	},
	{
		name: "Spotify",
		image: "/images/socialLogos/spotifyLogo.webp",
		url: `${baseUrl}/socials/spotify`,
		type: "link",
		style: {
			color: "#1ED760",
		},
	},
	{
		name: "TikTok",
		image: "/images/socialLogos/tiktokLogo.webp",
		url: `${baseUrl}/socials/tiktok`,
		type: "link",
		style: {
			background: "linear-gradient(90deg, #FD3E3E, #ffffff, #4DE8F4)",
			WebkitBackgroundClip: "text",
			MozBackgroundClip: "text",
			backgroundClip: "text",
			WebkitTextFillColor: "transparent",
		},
	},
	{
		name: "Reddit",
		image: "/images/socialLogos/redditLogo.webp",
		url: `${baseUrl}/socials/reddit`,
		type: "link",
		style: {
			color: "#E63E00",
		},
	},
	{
		name: "Revolt",
		image: "/images/socialLogos/revoltLogo.webp",
		url: `${baseUrl}/socials/revolt`,
		type: "link",
		style: {
			color: "#E6404C",
		},
	},
	{
		name: "Mastodon",
		image: "/images/socialLogos/mastodon.webp",
		url: `${baseUrl}/socials/mastodon`,
		type: "link",
		style: {
			color: "#5840d6",
		},
	},
	{
		name: "Steam",
		image: "/images/socialLogos/steam.webp",
		url: `${baseUrl}/socials/steam`,
		type: "link",
		style: {
			color: "#152e5b",
		},
	},
	{
		name: "Matrix",
		image: "/images/socialLogos/matrix.webp",
		url: `${baseUrl}/socials/matrix`,
		type: "link",
		style: {
			color: "#a7a7a7",
		},
	},
	{
		name: "Zipline Webstore Extension",
		image: "/images/ziplineExtension.webp",
		url: "https://chromewebstore.google.com/detail/zipline-upload/nckdinonilcnlmjipgggnejkpdldjmjn",
		type: "link",
		style: {
			color: "#1d242e",
		},
	},
	{
		name: "My Discord Bot - userApps",
		image: "/images/userApps.webp",
		url: "https://discord.com/oauth2/authorize?client_id=1223221223685886032",
		type: "link",
		style: {
			color: "#5865F2",
		},
	},
	{
		name: "GattinhosBot",
		image: "/images/gattinhosBot.webp",
		url: "https://gattinhosbot.is-a.dev",
		type: "link",
		style: {
			color: "#552370",
		},
	},
	{
		name: "Receiptify",
		image: "/images/receiptifyLogo.webp",
		url: "https://receiptify.stefdp.lol",
		type: "link",
		style: {
			color: "#b4bbb8",
		},
	},
	{
		name: "Homepage Dashboard",
		image: "/images/homepageLogo.webp",
		url: "https://dash.stefdp.lol",
		type: "link",
		style: {
			color: "#dbdada",
		},
	},
	{
		name: "Mail",
		image: "/images/socialLogos/mail.webp",
		url: "admin@stefdp.lol",
		type: "mail",
		style: {
			color: "#c5221f",
		},
	},
];
