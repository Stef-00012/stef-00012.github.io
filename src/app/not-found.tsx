"use client";

import Link from "next/link";
import TypeIt from "typeit-react";
import { useEffect, useState } from "react";

import "@/styles/not-found.css"

export default function NotFound() {
	const [currentTime, setCurrentTime] = useState<string | undefined>(undefined);

	const [httpCodeVisible, setHttpCodeVisible] = useState<boolean>(false);
	const [httpTextVisible, setHttpTextVisible] = useState<boolean>(false);

	useEffect(() => {
		updateTime()

		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval)
	}, []);

	function updateTime() {
		const newTime = new Date().toTimeString().split(" ").shift();

		setCurrentTime(newTime);
	}

	const errorCodeASCIIArray = [
		" /$$   /$$  /$$$$$$  /$$   /$$",
		"| $$  | $$ /$$$_  $$| $$  | $$",
		"| $$  | $$| $$$$\\ $$| $$  | $$",
		"| $$$$$$$$| $$ $$ $$| $$$$$$$$",
		"|_____  $$| $$\\ $$$$|_____  $$",
		"      | $$| $$ \\ $$$      | $$",
		"      | $$|  $$$$$$/      | $$",
		"      |__/ \\______/       |__/",
	];
	const errorTextASCIIArrayNot = [
		" /$$   /$$             /$$    ",
		'| $$$ | $$            | <a class="no-underline text" href="https://instagram.com/twitch">$$</a>    ',
		"| $$$$| $$  /$$$$$$  /$$$$$$  ",
		"| $$ $$ $$ /$$__  $$|_  $$_/  ",
		"| $$  $$$$| $$  \\ $$  | $$    ",
		"| $$\\  $$$| $$  | $$  | $$ /$$",
		"| $$ \\  $$|  $$$$$$/  |  $$$$/",
		"|__/  \\__/ \\______/    \\___/  ",
	];
	const errorTextASCIIArrayFound = [
		" /$$$$$$$$                                  /$$",
		"| $$_____/                                 | $$",
		"| $$     /$$$$$$  /$$   /$$ /$$$$$$$   /$$$$$$$",
		'| $$$$$ /$$__  $$| $$  | $$| $$__  $$ /<a class="no-underline text" href="https://instagram.com/discord">$$</a>__  $$',
		"| $$__/| $$  \\ $$| $$  | $$| $$  \\ $$| $$  | $$",
		"| $$   | $$  | $$| $$  | $$| $$  | $$| $$  | $$",
		"| $$   |  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$",
		"|__/    \\______/  \\______/ |__/  |__/ \\_______/",
	];

	return (
		<div className="flex-1">
			<code>
				<span className="square-bracket">[</span>
				<span className="text-[#EFC677] font-bold text-sm">{currentTime ? currentTime : "HH:mm:ss"}</span>
				<span className="square-bracket">]</span>
				<br />

				<span className="host">u_</span>
				<Link
					className="host no-underline"
					href="https://www.instagram.com/555.who.ana/"
				>
					a
				</Link>
				<span className="host">334</span>
				<span className="text-[#055E80] font-bold text-sm">@</span>
				<Link
					className="host no-underline"
					href="https://instagram.com/lejla_ly"
				>
					l
				</Link>
				<span className="host">oc</span>
				<Link
					className="host no-underline"
					href="https://www.instagram.com/555.who.ana/"
				>
					a
				</Link>
				<Link
					className="host no-underline"
					href="https://instagram.com/lejla_ly"
				>
					l
				</Link>
				<span className="host">host</span>
				<br />

				<span className="text-[#045803]">~</span>
				<span className="text"> $ </span>
				<TypeIt
					className="command"
					getBeforeInit={(instance) => {
						instance
							.options({
								speed: 80,
							})
							.type("bash /system/bin/404.sh")
							.exec(() => {
                                instance.destroy()

								setTimeout(() => {
									setHttpCodeVisible(true);
								}, 300);

								setTimeout(() => {
									setHttpTextVisible(true);
								}, 700);
							})
							.go();

						return instance;
					}}
				/>
				<br />

				<pre
					className={`${httpCodeVisible ? "block" : "hidden"} text m-auto w-min text-sm`}
					dangerouslySetInnerHTML={{ __html: errorCodeASCIIArray.join("\n") }}
				/>

				<pre
					className={`${httpTextVisible ? "block" : "hidden"} text m-auto w-min text-sm mt-16`}
					dangerouslySetInnerHTML={{
						__html: errorTextASCIIArrayNot.join("\n"),
					}}
				/>
				<pre
					className={`${httpTextVisible ? "block" : "hidden"} text m-auto w-min text-sm mt-4`}
					dangerouslySetInnerHTML={{
						__html: errorTextASCIIArrayFound.join("\n"),
					}}
				/>

				<Link
					href="/"
					className={`${httpTextVisible ? "block" : "hidden"} text hover:text-[#5F5F5F] flex flex-wrap items-center justify-center mt-8 underline`}
				>
					Go to Socials Page!
				</Link>
			</code>
		</div>
	);
}
