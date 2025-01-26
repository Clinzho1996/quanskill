"use client";

import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

function ExpertComp() {
	return (
		<section className="bg-white p-4">
			<div className="expert px-[6%] py-[6%] lg:px-20 lg:py-4 rounded-lg">
				<div className="flex flex-col lg:flex-row justify-start items-center gap-10 w-full">
					<div className="w-full lg:w-[43%]">
						<Image
							src="/ins3.png"
							alt="logo"
							width={470}
							height={480}
							className="w-full h-full lg:w-[470px] lg:h-[480px] object-contain"
						/>
					</div>
					<div className="flex flex-col justify-start gap-2 w-full lg:w-[57%]">
						<SecondaryButton
							title="The Quanskill Expert Advantage"
							img="/icon.png"
							className="bg-white"
						/>
						<div className="w-100 flex flex-col gap-2">
							<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary leading-[24px] sm:leading-[32px] my-2 lg:my-4">
								Beyond traditional teaching
							</h2>
						</div>
						<div className="pr-0">
							<div className="w-100 flex flex-row justify-start gap-2 items-center">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Learn troubleshooting from experts who&apos;ve solved real
									production issues
								</h2>
							</div>
							<div className="w-full flex flex-row justify-start gap-2 items-center mt-3 lg:mt-4">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Understand best practices from professionals who&apos;ve built
									enterprise AI systems
								</h2>
							</div>
							<div className="w-full flex flex-row justify-start gap-2 items-center mt-3 lg:mt-4">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Gain insights from instructors who actively work with
									cutting-edge AI tools
								</h2>
							</div>
							<div className="w-full flex flex-row justify-start gap-2 items-center mt-3 lg:mt-4 mb-12">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Network with leaders connected to the global tech ecosystem
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row justify-start items-center gap-10 w-full mt-[-5%]">
					<div className="flex flex-col justify-start gap-2 w-full lg:w-[47%]">
						<div className="w-100 flex flex-col gap-2">
							<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary leading-[32px] sm:leading-[60px]">
								Personalized mentorship
							</h2>

							<p className="text-primary font-medium mb-4">
								Each expert serves as both instructor and mentor, providing:
							</p>
						</div>
						<div className="pr-0">
							<div className="w-100 flex flex-row justify-start gap-2 items-center">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Career guidance based on industry experience
								</h2>
							</div>
							<div className="w-full flex flex-row justify-start gap-2 items-center mt-3 lg:mt-4">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Project feedback from a practitioner&apos;s perspective
								</h2>
							</div>
							<div className="w-full flex flex-row justify-start gap-2 items-center mt-3 lg:mt-4">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Interview preparation insights
								</h2>
							</div>
							<div className="w-full flex flex-row justify-start gap-2 items-center mt-3 lg:mt-4">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-[#6B7280] leading-[24px] sm:leading-[32px]">
									Professional network connections
								</h2>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-[53%]">
						<Image
							src="/ins2.png"
							alt="logo"
							width={470}
							height={480}
							className="w-full h-full lg:w-[470px] lg:h-[480px] object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ExpertComp;
