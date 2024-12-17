import TypeIt from "typeit-react";

import handleTyping from "@/scripts/Loading";
import { useState } from "react";

export default function Loading() {
	const [loadingVisible, setLoadingVisible] = useState<boolean>(true);

	return (
		<div>
			<div
				className={`${loadingVisible ? "z-[9999] overflow-auto" : "z-[-9999] overflow-hidden"} flex bg-[#1a1a1a] w-screen h-screen fixed break-all left-0 top-0`}
			>
				<TypeIt
					className="font-mono text-white text-base whitespace-pre-wrap mt-[5px] pl-[5px]"
					getBeforeInit={(instance) => {
						handleTyping(instance, setLoadingVisible);

						return instance;
					}}
				/>
				<button
					type="button"
					onClick={() => setLoadingVisible(false)}
					className={`${loadingVisible ? "" : "hidden"} text-[large] absolute bottom-[50px] left-[50%] translate-x-[-50%] bg-transparent text-[#0F0] border-none cursor-pointer font-mono`}
				>
					Skip Animation
				</button>
			</div>
			<div className="z-[-9998] bg-[#0000008e] w-full h-full fixed overflow-scroll break-all backdrop-blur-[3px] m-0 p-0 left-0 top-0">
				&nbsp;
			</div>
		</div>
	);
}
