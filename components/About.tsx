import Image from "next/image";
import AboutCard from "./AboutCard";
import SecondaryButton from "./SecondaryButton";

function About() {
	return (
		<section className="bg-white p-4">
			<div className="bg-[#fff] px-[6%] py-[12%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl mt-[-120px]">
				<div className="flex flex-col justify-center items-center align-middle gap-2">
					<SecondaryButton
						title="about quanskill"
						img="/icon.png"
						className="bg-white"
					/>
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						Empowering You with Future-Proof Skills
					</h2>
					<Image
						src="/vec2.png"
						alt="logo"
						width={250}
						height={50}
						className="flex flex-row  justify-center ml-[28%] mt-[-10px] lg:mt-[-20px] items-center object-contain"
					/>
					<p className="text-xs lg:text-sm font-inter text-[#6B7280] text-center leading-[24px] sm:leading-[24] w-full lg:w-[55%] mt-4">
						Quanskill transforms learners into AI and data science experts
						through hands-on training, real-world projects, and personalized
						mentorship. Our mission is simple: make AI education inclusive,
						affordable, and impactful.
					</p>
				</div>

				{/* info cards */}
				<div className="flex flex-col lg:flex-row justify-between items-center mt-7 gap-3">
					<AboutCard
						img="/industry.png"
						title="Quan Labs"
						description="Backed by partnerships with leading AI research organizations and tech companies."
					/>
					<AboutCard
						img="/courses.png"
						title="Deep Skilling"
						description="Our curriculum aligns with global data science standards, ensuring quality education."
					/>
					<AboutCard
						img="/faculty.png"
						title="QuanTors"
						description="Instructors with decades of combined experience in data science and AI."
					/>
					<AboutCard
						img="/tools.png"
						title="Collaborate with community"
						description="Access the latest AI frameworks and tech used by top companies."
					/>
				</div>

				<hr className="border-[1px] border-[#F1F1F1] mt-10 mb-10" />
				<div className="flex flex-col gap-2">
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						Journey to AI mastery
					</h2>
					<Image
						src="/infographics.png"
						width={1000}
						height={1000}
						alt="infographics"
						className="w-full object-contain"
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
