"use client";
import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fadeState, setFadeState] = useState("fade-in");
	const texts = [
		"Python Programming",
		"Mathematics",
		"Machine Learning",
		"Deep Learning",
		"Natural Lang. Processing",
		"LLMs and GenAI",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeState("fade-out"); // Start fade-out
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Change text
				setFadeState("fade-in"); // Start fade-in
			}, 1000); // Duration of fade-out animation
		}, 4000); // Total cycle duration
		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<section className="hero flex flex-col lg:flex-row items-center justify-between w-full px-[6%] py-[16%] lg:py-[4%] mt-0 ease-fade">
			<div className="w-full lg:w-[50%] pr-0 lg:pr-[100px]">
				<h2 className="text-white text-[28px] lg:text-[36px] font-bold font-inter">
					Unlock Your Future in
				</h2>
				<h2 className="text-secondary text-[28px] lg:text-[36px] font-bold font-inter">
					Data Science and AI
				</h2>
				<Image src="/bg-arrow.png" alt="logo" width={300} height={30} />
				<p className="text-white font-normal mt-3">
					Learn from industry leaders, master essential skills in{" "}
					<span className={` text-secondary ${fadeState}`}>
						{texts[currentIndex]}
					</span>
					, and build your career with confidence.
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
					src="/hero.png"
					alt="hero"
					width={500}
					height={500}
					className="w-full object-cover object-center"
				/>
			</div>
		</section>
	);
}

export default Hero;
