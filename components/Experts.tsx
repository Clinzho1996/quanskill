"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

function Experts() {
	return (
		<section className="bg-white p-4">
			<div className="expert px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg">
				<div className="flex flex-col lg:flex-row justify-start items-center gap-10 w-full">
					<div className="w-full lg:w-[43%]">
						<Image
							src="/experts.png"
							alt="logo"
							width={470}
							height={480}
							className="w-full h-full lg:w-[470px] lg:h-[480px] object-contain"
						/>
					</div>
					<div className="flex flex-col justify-start gap-2 w-full lg:w-[57%]">
						<SecondaryButton
							title="our experts"
							img="/icon.png"
							className="bg-white"
						/>
						<div className="w-100 flex flex-col gap-2">
							<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary leading-[32px] sm:leading-[60px]">
								Learn from the Best
							</h2>
							<Image
								src="/line.png"
								alt="logo"
								width={70}
								height={50}
								className="flex flex-row  ml-[32%] mt-[-10px] lg:mt-[-20px] object-contain"
							/>
						</div>
						<div className="pr-0 lg:pr-[80px]">
							<p className="text-[#4B5563] text-[12px] lg:text-sm font-inter  mt-6">
								Our faculty includes seasoned AI practitioners and data
								scientists committed to making complex ideas simple.
							</p>
							<p className="text-[#4B5563] text-[12px] lg:text-sm font-inter  mt-2">
								With experience in top tech firms and research projects, our
								instructors bring real-world knowledge to every class.
							</p>
						</div>
						<button
							className="py-2 px-3 bg-[#FFFFFF] rounded-lg border-[1px] border-[#1E3A8A] flex flex-row font-semibold items-center text-[#1E3A8A] lg:text-[12px] text-[10px] gap-1 w-fit mt-5"
							onClick={() => (window.location.href = "/experts")}>
							Explore Our Experts
							<IconCaretRightFilled
								className="w-4 h-4 text-[#6B7280]"
								color="#6B7280"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experts;
