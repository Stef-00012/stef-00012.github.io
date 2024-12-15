import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { aboutMeText } from "@/data/aboutMe";
import aboutMePlaceholders from "@/data/aboutMePlaceholders.json";

hljs.registerLanguage("javascript", javascript);

export function getCodeBlock() {
	let replacedAboutMetext = aboutMeText;

	for (const placeholder in aboutMePlaceholders) {
		let replace =
			aboutMePlaceholders[placeholder as keyof typeof aboutMePlaceholders];

		if (!replace.startsWith("__execjs:")) continue;

		replace = eval(replace.split("__execjs:").pop() as string);

		replacedAboutMetext = replacedAboutMetext.replaceAll(
			`[[${placeholder}]]`,
			replace,
		);
	}

	let highlightedAboutMe = hljs.highlight(replacedAboutMetext, {
		language: "javascript",
		ignoreIllegals: true,
	}).value;

	for (const placeholder in aboutMePlaceholders) {
		const replace =
			aboutMePlaceholders[placeholder as keyof typeof aboutMePlaceholders];

		if (replace.startsWith("__execjs:")) continue;

		highlightedAboutMe = highlightedAboutMe.replaceAll(
			`[[${placeholder}]]`,
			replace,
		);
	}

	return highlightedAboutMe;
}
