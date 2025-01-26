import AboutCard from "@/components/AboutCard";
import Breadcrumb from "@/components/BreadCrumb";
import Experts from "@/components/Experts";
import PreFooter from "@/components/PreFooter";
import SecondaryButton from "@/components/SecondaryButton";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

function BecomeAnInstructor() {
	return (
		<section>
			<Breadcrumb
				title="Become an Instructor"
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>
			<section className="bg-white p-4">
				<div className="bg-[#fff] px-[4%] py-[8%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl mt-[-30px] lg:mt-[-50px]">
					<div className="flex flex-col justify-center items-center align-middle gap-2">
						<SecondaryButton
							title="about quanskill"
							img="/icon.png"
							className="bg-white"
						/>
						<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
							Discover Your Potential
						</h2>
						<Image
							src="/vec.png"
							alt="logo"
							width={150}
							height={50}
							className="flex flex-row  justify-center ml-[18%] mt-[-10px] lg:mt-[-20px] items-center object-contain"
						/>
						<p className="text-xs lg:text-sm font-inter text-[#6B7280] text-center leading-[24px] sm:leading-[24] w-full lg:w-[55%] mt-4">
							Quanskill transforms learners into AI and data science experts
							through hands-on training, real-world projects, and personalized
							mentorship. Our mission is simple: make AI education inclusive,
							affordable, and impactful.
						</p>
					</div>

					{/* info cards */}
					<div className="flex flex-col lg:flex-row justify-center items-center mt-7 gap-3 w-full mx-auto">
						<AboutCard
							img="/industry.png"
							title="Earn Money"
							description="Earn money every time a student purchases your course. Get paid monthly through PayPal or Payoneer, it’s your choice."
						/>
						<AboutCard
							img="/courses.png"
							title="Inspire Students"
							description="Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge."
						/>
						<AboutCard
							img="/faculty.png"
							title="Join Our Community"
							description="Take advantage of our active community of instructors to help you through your course creation process."
						/>
					</div>
				</div>
			</section>
			<Experts />
			<Testimonials />
			<PreFooter />
		</section>
	);
}

export default BecomeAnInstructor;
