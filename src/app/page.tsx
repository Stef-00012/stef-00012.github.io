"use client";

import GitHubRepoDisplay from "@/components/GitHubRepoDisplay";
import MainLinkButton from "@/components/MainLinkButton";
import { Carousel } from "react-responsive-carousel";
import Collapsible from "@/components/Collapsible";
import Loading from "@/components/Loading";
import { Tooltip } from "react-tooltip";
import TypeIt from "typeit-react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import { alterativeLinks } from "@/data/alternativeLinks";
import { getCodeBlock } from "@/scripts/aboutMeHighlight";
import { getRankedRepos } from "@/scripts/githubRepos";
import { rabbitImages } from "@/data/rabbitImages";
import { mainLinks } from "@/data/mainLinks";
import { useEffect, useState } from "react";
import { socials } from "@/data/socials";
import { musics } from "@/data/music";
import {
	handlePrevious,
	handlePlayPause,
	handleNext,
	selectRandomSong,
} from "@/scripts/Music";

import type { ScoredFormattedRepo } from "@/types/github";
import type { Music } from "@/types/music";
import type TypeItInstance from "typeit";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/home.css";

export default function Home() {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentSong, setCurrentSong] = useState<Music>(musics[0]);
	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
	const [aboutMeSpoilerOpen, setAboutMeSpoilerOpen] = useState<boolean>(false);
	const [rankedRepos, setRankedRepos] = useState<Array<ScoredFormattedRepo>>(
		[],
	);
	const [aboutMeTypeItInstance, setAboutMeTypeItInstance] = useState<
		TypeItInstance | undefined
	>(undefined);

	useEffect(() => {
		const randomSongIndex = selectRandomSong();

		setCurrentSongIndex(randomSongIndex);

		(async () => {
			const repos = await getRankedRepos();

			setRankedRepos(repos);
		})();
	}, []);

	useEffect(() => {
		setCurrentSong(musics[currentSongIndex]);
	}, [currentSongIndex]);

	return (
		<div>
			<Loading />

			<div className="flex flex-col items-center justify-center">
				<Image
					src="/images/pfp.webp"
					alt="Avatar"
					width={120}
					height={120}
					className="pt-[60px] transition-[padding-bottom, transform] duration-[.65s] hover:scale-[1.35] pb-[10px] hover:pb-[30px] block"
					priority
				/>
				<p className="text-[#d63384] text-xl transition-transform duration-[.65s] animate-cray inline-block hover:scale-[1.18] font-mono bg-[#00000099] rounded-[13px] p-[4px] pr-[8px] pl-[8px] font-bold">
					Stef
				</p>
			</div>

			<div className="flex flex-col items-center justify-center">
				<div className="mt-[10px] p-[15px] w-auto bg-[#00000099] rounded-[22px] inline-flex flex-wrap items-center justify-center mx-[25px]">
					{socials.map((social) => (
						<div key={social.id}>
							<Link
								href={
									social.type === "social"
										? `/socials/${social.id}`
										: social.url
								}
								target="_blank"
								rel="noopener"
								data-tooltip-id={`${social.id}-tooltip`}
							>
								<Image
									src={`/images/socialLogos/${social.image}`}
									alt={`${social.name} Logo`}
									width={53}
									height={53}
									className="pl-[8px] pr-[8px] transition-transform duration-[.65s] hover:scale-[1.35] py-[3px]"
								/>
							</Link>

							<Tooltip
								id={`${social.id}-tooltip`}
								style={social.tooltipStyle}
								border={social.tooltipBorder}
							>
								<b>{social.name}</b>
								<br />
								<i>{social.tooltip}</i>
							</Tooltip>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center justify-center mt-4">
				<div className="bg-transparent p-[10px] rounded-[5px] mx-auto my-0">
					<button
						type="button"
						className="bg-none border-none p-0 cursor-pointer outline-none w-[40] h-[40] opacity-[0.7] transition-[transform,opacity] ease-[ease] duration-[0.3s] hover:scale-[, opacity 0.3s ease;1.1] hover:opacity-[0.5] focus:outline-none"
						onClick={() => {
							handlePrevious(
								currentSongIndex,
								setCurrentSongIndex,
								setIsPlaying,
							);
						}}
					>
						<Image
							src="/images/music/back.svg"
							alt="Previous Song"
							width={40}
							height={40}
							className="pointer-events-none invert-[70%]"
						/>
					</button>

					<button
						type="button"
						className="bg-none border-none p-0 cursor-pointer outline-none w-[40] h-[40] opacity-[0.7] transition-[transform,opacity] ease-[ease] duration-[0.3s] hover:scale-[, opacity 0.3s ease;1.1] hover:opacity-[0.5]"
						onClick={() => {
							handlePlayPause(currentSongIndex, setIsPlaying);
						}}
					>
						<Image
							src={`/images/music/${isPlaying ? "pause" : "play"}.svg`}
							alt={isPlaying ? "Pause" : "Play"}
							width={40}
							height={40}
							className="pointer-events-none invert-[70%]"
						/>
					</button>

					<button
						type="button"
						className="bg-none border-none p-0 cursor-pointer outline-none w-[40] h-[40] opacity-[0.7] transition-[transform,opacity] ease-[ease] duration-[0.3s] hover:scale-[, opacity 0.3s ease;1.1] hover:opacity-[0.5]"
						onClick={() => {
							handleNext(currentSongIndex, setCurrentSongIndex, setIsPlaying);
						}}
					>
						<Image
							src="/images/music/next.svg"
							alt="Next Song"
							width={40}
							height={40}
							className="pointer-events-none invert-[70%]"
						/>
					</button>
				</div>

				<p className="italic mt-[5px] text-base text-white [font-family:'Encode_Sans_Expanded',sans-serif]">
					Now Playing | {currentSong.name} - {currentSong.artist}
				</p>

				<audio
					id="audio"
					autoPlay
					onEnded={() => {
						handleNext(currentSongIndex, setCurrentSongIndex, setIsPlaying);
					}}
				/>
			</div>

			<div className="flex flex-col items-center justify-center mt-4">
				<div className="inline-flex flex-wrap items-center justify-center gap-2">
					<Image
						src="https://api.statusbadges.me/badge/status/694986201739952229?label=Currently&labelColor=5865F2"
						alt="Discord Status"
						width={0}
						height={0}
						className="w-auto h-auto"
					/>

					<Image
						src="https://api.statusbadges.me/badge/playing/694986201739952229?label=Currently&labelColor=5865F2"
						alt="Currently Playing"
						width={0}
						height={0}
						className="w-auto h-auto"
					/>

					<Image
						src="https://api.statusbadges.me/badge/vscode/694986201739952229?label=Currently&labelColor=5865F2"
						alt="Currently Coding"
						width={0}
						height={0}
						className="w-auto h-auto"
					/>

					<Link
						href="https://api.statusbadges.me/openspotify/694986201739952229"
						target="_blank"
						rel="noopener"
					>
						<Image
							src="https://api.statusbadges.me/badge/spotify/694986201739952229?label=Listening%20to"
							alt="Currently Listening to..."
							width={0}
							height={0}
							className="w-auto h-auto"
						/>
					</Link>
				</div>
			</div>

			<Collapsible
				title="About Me"
				onOpen={() => aboutMeTypeItInstance?.unfreeze()}
				onClose={() => aboutMeTypeItInstance?.freeze()}
			>
				<div className="flex flex-wrap">
					<pre className="w-full">
						<code className="rounded-[10px] max-h-[350px] overflow-scroll pb-0 mb-0 hljs text-sm">
							<TypeIt
								getBeforeInit={(instance) => {
									instance
										.options({
											speed: 3.5,
											afterComplete: () => instance.destroy(),
										})
										.type(getCodeBlock())
										.freeze();

									return instance;
								}}
								getAfterInit={(instance) => {
									setAboutMeTypeItInstance(instance);

									return instance;
								}}
							/>
						</code>
					</pre>

					<p
						tabIndex={0}
						onClick={() => {
							setAboutMeSpoilerOpen(true);
						}}
						onKeyDown={(event) => {
							if (event.key === "Enter") setAboutMeSpoilerOpen(true);
						}}
						className={`${aboutMeSpoilerOpen ? "text-white cursor-default" : "text-transparent cursor-pointer"} italic bg-[#362f2e] rounded-[5px] mt-[7px]`}
					>
						(My old Reddit account got banned)
					</p>
				</div>
			</Collapsible>

			<Collapsible title="My Rabbit">
				<div className="flex flex-wrap items-center justify-center">
					<Carousel
						showIndicators={false}
						showThumbs={false}
						showArrows
						infiniteLoop
					>
						{rabbitImages.map((image) => (
							<div key={image}>
								<img
									src={`/images/rabbit/${image}`}
									alt="My Rabbit Pictures"
									className="object-contain w-[100%] h-[100%] max-h-[60vh] m-auto"
								/>
							</div>
						))}
					</Carousel>
				</div>
			</Collapsible>

			<Collapsible title="Alternative Links">
				<div>
					{alterativeLinks.map((link) => (
						<div key={link.name} className="flex">
							<Image
								src={link.image}
								alt={`${link.name} Logo`}
								width={15}
								height={15}
								className="rounded-[4px] mr-[5px] object-contain"
							/>
							<p>
								<span className="font-bold">{link.name}</span>:{" "}
								<Link
									href={link.type === "mail" ? `mailto:${link.url}` : link.url}
									target="_parent"
									rel="noopener"
									className="font-bold hover:brightness-[0.8]"
									style={link.style}
								>
									{link.url}
								</Link>
							</p>
						</div>
					))}
				</div>
			</Collapsible>

			<Collapsible title="GitHub Stats">
				<div className="flex flex-wrap items-center justify-center">
					<embed
						className="p-[5px] w-auto align-top rounded-xl max-md:w-[100%]"
						type="text/html"
						src="https://github-stats-stef-00012.vercel.app/api?username=Stef-00012&show_icons=true&theme=tokyonight"
					/>
					<embed
						className="p-[5px] w-auto align-top rounded-xl max-md:w-[100%]"
						type="text/html"
						src="https://github-stats-stef-00012.vercel.app/api/top-langs/?username=Stef-00012&theme=tokyonight"
					/>
					<embed
						className="p-[5px] w-auto align-top rounded-xl max-md:w-[100%]"
						src="https://github-readme-streak-stats-stef-00012.vercel.app/?user=Stef-00012&theme=radical"
					/>
				</div>
			</Collapsible>

			<Collapsible title="Top GitHub Repos">
				{rankedRepos.length <= 0 ? (
					<p>Loading...</p>
				) : (
					rankedRepos.map((repo) => (
						<GitHubRepoDisplay key={repo.id} repo={repo} />
					))
				)}
			</Collapsible>

			{mainLinks.map((link) => (
				<MainLinkButton
					key={link.url}
					title={link.name}
					href={link.url}
					alt={link.name}
				/>
			))}

			<footer className="text-center bg-[#000000a1] text-white mt-5">
				<p className="mb-0 p-[15px]">
					© {new Date().getFullYear()} Stefano Del Prete. All rights reserved.
				</p>
			</footer>

			<link
				rel="stylesheet"
				href="https://unpkg.com/highlightjs@9.16.2/styles/atom-one-dark.css"
			/>

			<Script src="/js/oneko.js" />
		</div>
	);
}
