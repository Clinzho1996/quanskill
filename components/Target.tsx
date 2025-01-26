import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

function Target() {
	return (
		<section className="bg-white p-4">
			<div className="bg-primary px-[6%] py-[15%] lg:px-20 lg:py-6 rounded-lg">
				<div className="flex flex-col lg:flex-row justify-start items-center gap-10 w-full">
					<div className="w-full lg:w-[43%]">
						<Image
							src="/vid.png"
							alt="logo"
							width={470}
							height={480}
							className="w-full h-full lg:w-[470px] lg:h-[480px] object-contain"
						/>
					</div>
					<div className="flex flex-col justify-start gap-2 w-full lg:w-[57%]">
						<SecondaryButton
							title="who should join?"
							img="/icon.png"
							className="bg-white"
						/>
						<div className="w-100 flex flex-col justify-start gap-2">
							<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-white leading-[32px] sm:leading-[60px]">
								Quanskill Is for Everyone Eager to Learn
							</h2>
						</div>
						<div className="mt-3 flex flex-col gap-5">
							<div className="w-100 flex flex-row justify-start gap-2 items-center">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-white leading-[32px] sm:leading-[60px]">
									<strong>Students:</strong> Future-proof your career with data
									science skills.
								</h2>
							</div>
							<div className="w-100 flex flex-row justify-start gap-2 items-center">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-white leading-[32px] sm:leading-[60px]">
									<strong>Professionals:</strong> Stay ahead by mastering the
									latest AI tools.
								</h2>
							</div>
							<div className="w-100 flex flex-row justify-start gap-2 items-center">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-white leading-[32px] sm:leading-[60px]">
									<strong>Entrepreneurs: </strong> Explore AI concepts that fuel
									innovation.
								</h2>
							</div>
							<div className="w-100 flex flex-row justify-start gap-2 items-center">
								<Image
									src="/check.png"
									alt="check"
									width={30}
									height={30}
									className="object-contain"
								/>
								<h2 className="text-xs lg:text-sm font-normal font-inter text-white leading-[32px] sm:leading-[60px]">
									<strong>Researchers & Hobbyists:</strong> Explore AI concepts
									that fuel innovation.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Target;
