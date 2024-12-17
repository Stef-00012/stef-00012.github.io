import hljs from "highlight.js/lib/core";
import { aboutMeText } from "@/data/aboutMe";
import typescript from "highlight.js/lib/languages/typescript";
import aboutMePlaceholders from "@/data/aboutMePlaceholders.json";

hljs.registerLanguage("typescript", typescript);

export function getCodeBlock() {
	let replacedAboutMetext = aboutMeText;

	replacedAboutMetext = replacePlaceholders(replacedAboutMetext, true)

	let highlightedAboutMe = hljs.highlight(replacedAboutMetext, {
		language: "typescript",
		ignoreIllegals: true,
	}).value;

	highlightedAboutMe = replacePlaceholders(highlightedAboutMe, false)

	return highlightedAboutMe;
}

function replacePlaceholders(text: string, js: boolean): string {
	let replacedText = text;

	for (const placeholder in aboutMePlaceholders) {
		let hasJs = false;

		let replace =
			aboutMePlaceholders[placeholder as keyof typeof aboutMePlaceholders];

		if (replace.startsWith("__execjs:")) hasJs = true;

		if ((js && !hasJs) || (!js && hasJs)) continue;

		if (hasJs) replace = eval(replace.split("__execjs:").pop() as string);

		replacedText = replacedText.replaceAll(
			`[[${placeholder}]]`,
			replace,
		);
	}

	return replacedText;
}
