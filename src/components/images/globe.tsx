interface Data {
	color?: string;
	size?: number;
	className?: string;
	alt: string;
}

export default function GlobeSVG({
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

			<circle cx="12" cy="12" r="10"/>
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
			<path d="M2 12h20"/>
		</svg>
	);
}
