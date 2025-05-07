"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";

function FormSuccess() {
	return (
		<div className="w-full h-screen mx-auto flex flex-col justify-center items-center gap-3">
			<Image
				src="/success.png"
				alt="success"
				width={190}
				height={162}
				className="object-contain"
			/>
			<p className="text-primary text-xs lg:text-sm font-normal font-inter">
				Thank you for signing up for our May cohort!
			</p>
			<p className="text-xs text-[#6B7280] font-inter font-light  text-center">
				One of our support staff will reach out to you shortly
			</p>
			<button
				className="bg-secondary flex flex-row justify-center items-center gap-1 text-primary py-3 px-10 rounded-lg mt-4 w-fit"
				onClick={() => (window.location.href = "/")}>
				<p className="text-xs lg:text-sm">Continue exploring Quanskill</p>
				<IconCaretRightFilled size={18} />
			</button>
		</div>
	);
}

export default FormSuccess;
