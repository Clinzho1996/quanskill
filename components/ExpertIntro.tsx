import OurExperts from "./OurExperts";
import SecondaryButton from "./SecondaryButton";

function ExpertIntro() {
	return (
		<section className="bg-white p-4">
			<div className="bg-[#fff] px-[6%] py-[12%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl mt-[-30px] lg:mt-[-60px]">
				<div className="flex flex-col lg:flex-row justify-between items-end align-bottom w-full">
					<div className="w-full lg:w-[50%]">
						<SecondaryButton
							img="/icon.png"
							className="bg-white"
							title="Your Success, Guided by Excellence"
						/>
						<h2 className="text-primary text-[28px] pr-0 lg:pr-[18%] font-inter font-bold mt-4">
							Learn from Industry Veterans Who Shape AI&apos;s Future
						</h2>
					</div>
					<div className="w-full lg:w-[50%]">
						<p className="text-[#6B7280] text-[14px]">
							At Quanskill, you&apos;ll learn directly from professionals who
							don&apos;t just teach AI and Data Science—they live it. Our
							instructors bring together decades of experience from leading tech
							companies, research institutions, and successful AI
							implementations.
						</p>
					</div>
				</div>

				<OurExperts />
			</div>
		</section>
	);
}

export default ExpertIntro;
