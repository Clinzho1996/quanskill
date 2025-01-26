import {
	IconBrandTelegram,
	IconMail,
	IconPhoneCall,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

function Footer() {
	const date = new Date();
	return (
		<section className="bg-white p-4">
			<div className="bg-primary p-[6%] pb-10 lg:px-20 lg:pt-20 rounded-lg w-full">
				{/* newsletter */}
				<div className="flex flex-col lg:flex-row justify-between gap-20 w-full">
					<div className="w-full lg:w-[30%] pr-0 lg:pr-10">
						<Image
							src="/logowhite.png"
							alt="logo"
							width={200}
							height={30}
							className="object-fit"
						/>
						<p className="text-[#BCBCBC] text-[12px] lg:text-sm mt-6 pr-0 lg:pr-5 leading-[28px]">
							Sign up to Quanskill weekly newsletter to get the latest updates.
						</p>
						<div className="flex flex-row justify-between gap-3 mt-6 items-center border-[1px] border-secondary rounded-xl">
							<Input
								type="email"
								placeholder="Enter your email"
								className="w-full border-none placeholder:text-[#6B7280] placeholder:text-xs text-sm font-normal text-white"
							/>
							<button className="bg-secondary p-2 flex rounded-r-lg flex-row items-center text-primary lg:text-[12px] text-[10px] gap-1">
								<IconBrandTelegram className="text-white" />
							</button>
						</div>
					</div>
					<div className="lg:flex hidden flex-row  justify-between gap-3 lg:gap-[120px] w-full lg:w-[70%]">
						<div className="w-full lg:w-[17%]">
							<p className="text-white text-[12px] lg:text-sm font-inter">
								Quick Links
							</p>
							<div className="flex flex-col gap-3 mt-4">
								<Link
									href="/about-us"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									About Us
								</Link>
								<Link
									href="/experts"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									Experts
								</Link>
								<Link
									href="/resources"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									Resources
								</Link>
								<Link
									href="/community"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									Community
								</Link>
								<Link
									href="/contact-us"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									Contact
								</Link>
							</div>
						</div>
						<div className="w-full lg:w-[25%]">
							<p className="text-white text-[12px] lg:text-sm font-inter">
								Legal
							</p>
							<div className="flex flex-col gap-3 mt-4">
								<Link
									href="/terms-conditions"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									Terms of Service
								</Link>
								<Link
									href="/privacy-policy"
									className="text-[#BCBCBC] text-[12px] lg:text-sm">
									Privacy Policy
								</Link>
							</div>
						</div>
						<div className="w-full lg:w-[58%]">
							<p className="text-white text-[12px] lg:text-sm font-inter">
								Need help
							</p>
							<div className="flex flex-col gap-3 mt-4">
								<div className="flex flex-row justify-start gap-1">
									{" "}
									<IconPhoneCall className="mr-2 text-secondary w-5 h-5" />
									<Link
										href="/"
										className="text-[#BCBCBC] text-[12px] font-normal lg:text-sm">
										+84 - 942322620 (Vietnam)
									</Link>
								</div>
								<div className="flex flex-row justify-start gap-1">
									{" "}
									<IconPhoneCall className="mr-2 text-secondary w-5 h-5" />
									<Link
										href="/"
										className="text-[#BCBCBC] text-[12px] font-normal lg:text-sm">
										+94 - 779667777 (Sri Lanka)
									</Link>
								</div>
								<div className="flex flex-row justify-start gap-1">
									{" "}
									<IconPhoneCall className="mr-2 text-secondary w-5 h-5" />
									<Link
										href="/"
										className="text-[#BCBCBC] text-[12px] font-normal lg:text-sm">
										+63 9763477807 (Philippines)
									</Link>
								</div>
								<div className="flex flex-row justify-start gap-1">
									<IconMail className="mr-2 text-secondary w-5 h-5" />
									<Link
										href="/"
										className="text-[#BCBCBC] text-[12px] font-normal lg:text-sm">
										info@quanskill.com
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-3 justify-between border-t-[1px] border-[#FFFFFF2B] pt-4 mt-10">
					<p className="text-[#BCBCBC] text-[12px] font-normal font-inter lg:text-sm">
						Quanskill is your trusted partner in online learning, offering
						expertly curated courses across diverse fields such as technology,
						business, creative arts, and personal development. Our platform is
						designed to empower learners with the skills they need to excel in
						their careers, explore new interests, or pursue lifelong passions.
						Whether you&apos;re a student, professional, or hobbyist, Quanskill
						provides the tools to help you succeed.
					</p>
					<p className="text-[#BCBCBC] text-[12px] font-normal font-inter lg:text-sm">
						With Quanskill, learning is both flexible and affordable, ensuring
						that anyone, anywhere, can achieve their goals. Our expert-led
						courses are crafted to deliver real-world knowledge through
						interactive lessons, practical exercises, and engaging content. From
						mastering coding and data analytics to enhancing leadership and
						marketing skills, we cater to all learning needs.
					</p>
					<p className="text-[#BCBCBC] text-[12px] font-normal font-inter lg:text-sm">
						Join a global community of learners who trust Quanskill for their
						growth and development. Our platform makes learning accessible on
						your schedule, allowing you to gain valuable certifications and
						skills that stand out in today&apos;s competitive world. Discover a
						world of opportunities with Quanskill – where knowledge meets
						potential.
					</p>
				</div>
				{/* Copyright & socials */}
				<div className="flex flex-col gap-4 lg:flex-row justify-between bg-white p-8 mt-10 rounded-lg items-center">
					<p className="text-primary font-inter text-[12px]">
						&copy;{date.getFullYear()} Quanskill
					</p>
					<div className="flex flex-row justify-between gap-3 items-center">
						<Image src="/l1.png" alt="fb" width={30} height={30} />
						<Image src="/l2.png" alt="fb" width={30} height={30} />
						<Image src="/l3.png" alt="fb" width={30} height={30} />
						<Image src="/l4.png" alt="fb" width={30} height={30} />
						<Image src="/l5.png" alt="fb" width={30} height={30} />
						<Image src="/l6.png" alt="fb" width={30} height={30} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
