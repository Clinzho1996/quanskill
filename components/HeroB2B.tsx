"use client";
import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";

function HeroB2B() {
	return (
		<section className="hero flex flex-col lg:flex-row items-center justify-between w-full px-[6%] py-[16%] lg:py-[4%] mt-0 ease-fade">
			<div className="w-full lg:w-[50%] pr-0 lg:pr-[100px]">
				<h2 className="text-white text-[28px] lg:text-[36px] font-bold font-inter">
					Your Partner in the Age of
				</h2>
				<h2 className="text-secondary text-[28px] lg:text-[36px] font-bold font-inter">
					Smart Automation
				</h2>
				<Image src="/bg-arrow.png" alt="logo" width={300} height={30} />
				<p className="text-white font-normal mt-3">
					Empowering Manufacturing & Automation Companies with AI, ML, and Deep
					Tech Talent
				</p>
				<button
					className="py-2 px-3 rounded-lg bg-secondary  flex flex-row items-center text-white lg:text-[12px] text-[10px] gap-1 mt-10"
					onClick={() => (window.location.href = "/waitlist")}>
					Start Your Journey
					<IconCaretRightFilled
						className="w-4 h-4 text-[#6B7280]"
						color="#FBDCA2"
					/>
				</button>
			</div>
			<div className="w-full lg:w-[50%] mt-10 lg:mt-0">
				<Image
					src="/B2B.png"
					alt="hero"
					width={500}
					height={500}
					className="w-full object-cover object-center"
				/>
			</div>
		</section>
	);
}

export default HeroB2B;
