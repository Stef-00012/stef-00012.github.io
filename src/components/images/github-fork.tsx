interface Data {
	color?: string;
	size?: number;
	className?: string;
	alt: string;
}

export default function GitHubForkSVG({
	className = "",
	color = "currentColor",
	size = 24,
	alt,
}: Data) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<title>{alt}</title>

			<circle cx="12" cy="18" r="3" />
			<circle cx="6" cy="6" r="3" />
			<circle cx="18" cy="6" r="3" />
			<path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
			<path d="M12 12v3" />
		</svg>
	);
}
