import Link from "next/link";

interface Data {
	href: string;
	title: string;
}

export default function MainLinkButton({ href, title }: Data) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener"
			className="mx-4 mt-4 w-[calc(100%-2rem)] h-[55px] block text-xl bg-[#00000080] text-left text-[white] cursor-pointer p-2.5 rounded-[25px] border-4 border-solid border-[#a2a3a5]"
		>
			{title}
		</Link>
	);
}
