"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

function PreFooter() {
	return (
		<section className="bg-white p-4">
			<div className="prefooter p-[6%] pb-10 lg:px-20 lg:pt-20 rounded-lg w-full flex flex-col justify-center">
				{/* newsletter */}
				<div className="prefootermain px-[6%] py-[12%] lg:py-[4%] rounded-xl flex flex-col lg:flex-row justify-between  w-full">
					<div className="w-full lg:w-[60%]">
						<SecondaryButton
							title="join quanskill today!"
							img="/icon.png"
							className="bg-white"
						/>
						<div className="flex flex-col justify-between align-middle mt-2 w-[80%]">
							<h2 className="text-white text-[20px] lg:text-[28px] leading-[28px] lg:leading-[44px] font-bold">
								Ready to Transform Your Future?
							</h2>
							<Image
								src="/line.png"
								alt="logo"
								width={130}
								height={30}
								className="hidden lg:flex flex-row  justify-center ml-[30%] items-center object-contain"
							/>
						</div>
						<p className="text-white text-xs lg:text-sm mt-2">
							Sign up today and take the first step toward a thriving career in
							AI and data science.
						</p>
					</div>
					<div className="flex flex-row justify-start items-center w-full lg:w-[30%]">
						<button
							className="py-2 px-3 rounded-lg bg-secondary  flex flex-row items-center text-white lg:text-[12px] text-[10px] gap-1 mt-5 lg:mt-0"
							onClick={() => (window.location.href = "/waitlist")}>
							Start Your Journey
							<IconCaretRightFilled
								className="w-4 h-4 text-[#6B7280]"
								color="#FBDCA2"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PreFooter;
