"use client";
import Faq from "@/components/Faq";
import PreFooter from "@/components/PreFooter";
import SecondaryButton from "@/components/SecondaryButton";
import Testimonials from "@/components/Testimonials";
import { courses } from "@/constants";
import {
	IconCaretRightFilled,
	IconCircleFilled,
	IconHome,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function CourseDetails() {
	const { id } = useParams();
	const course = courses.find((course) => course.id.toString() === id);

	if (!course) {
		return (
			<section className="bg-primary py-[4%] px-[6%]">
				<p className="text-white text-[16px]">Course not found</p>
			</section>
		);
	}

	return (
		<div>
			<section className="bg-primary pt-[4%] pb-[12%] px-[6%]">
				<div className="flex flex-row justify-start items-center gap-3">
					<IconHome color="#fff" size={18} />
					<p className="text-white text-[13px]">/</p>
					<p className="text-white text-[13px]">Courses</p>
					<p className="text-white text-[13px]">/</p>
					<p className="text-white text-[13px]">{course.title}</p>
				</div>

				<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 mt-5">
					<div className="w-full lg:w-[65%]">
						<h2 className="text-white text-[20px] lg:text-[36px] font-semibold">
							{course.title}
						</h2>
						<h3 className="text-white text-[17px] lg:text-[26px] font-semibold">
							Price: <span className="text-secondary">{course.price}</span>
						</h3>
						<p className="text-white text-[14px] lg:text-[16px] mt-3 font-light">
							{course.description}
						</p>
						<div className="mt-5 flex flex-row justify-start items-center gap-3 font-light">
							<Image alt="avatar" src="/user.png" width={50} height={50} />
							<p className="text-white text-[14px] lg:text-[16px]">
								Instructors:{" "}
								<span className="underline">
									{course.instructors[0].concat(" and 2 others ...")}
								</span>
							</p>
						</div>

						<Link
							href="/waitlist"
							className="py-2 px-6 w-fit rounded-lg bg-secondary  flex flex-row items-center text-white lg:text-[12px] text-[10px] gap-1 mt-6">
							Enroll Now
							<IconCaretRightFilled
								className="w-4 h-4 text-[#6B7280]"
								color="#FBDCA2"
							/>
						</Link>

						{/* <div className="flex flex-row flex-wrap justify-start items-center gap-5 mt-5">
							<p className="text-white text-[12px] lg:text-[14px] font-light">
								{course.enrolled} already enrolled
							</p>
							<p className="text-white text-[12px] lg:text-[14px] font-light flex flex-row justify-start items-center gap-1">
								<IconExclamationCircleFilled size={18} /> Last updated{" "}
								{course.lastUpdated}
							</p>
							<p className="text-white text-[12px] lg:text-[14px] font-light flex flex-row justify-start items-center gap-1">
								<IconWorld size={18} /> English
							</p>
						</div> */}
					</div>
					<div className="bg-white py-3 px-6 rounded-lg w-full lg:w-[35%]">
						<h2 className="text-[16px] lg:text-[18px] font-bold text-primary">
							Impactful
						</h2>
						<p className="text-xs lg:text-sm text-[#6B7280] mt-3">
							{/* By earning this certificate, you demonstrate your ability to apply
							practical insights and techniques, paving the way for career
							advancement and professional success in {course.title} */}
							By attending this masterclass, you'll go from zero to hero,
							building complete agent-driven marketing systems that produce
							professional results.
						</p>
						<hr className="border-[1px] border-[#F1F1F1] mt-3 mb-3" />
						{/* <h2 className="text-[14px] lg:text-[16px] font-bold text-primary">
							Lab Sessions
						</h2>
						<p className="text-xs lg:text-sm text-[#6B7280] mt-3 flex flex-row justify-start items-center gap-1">
							Recommended experience{" "}
							<IconInfoCircle className="text-secondary" size={18} />
						</p> */}
						<p className="text-xs lg:text-sm text-[#6B7280] mt-6">
							Price:{" "}
							<span className="text-primary font-bold">{course.price}</span>
						</p>
						{/* <p className="flex flex-row justify-start items-center gap-1 text-xs lg:text-sm mt-3 text-[#6B7280]">
							<span className="text-primary font-bold">4.8</span>{" "}
							<IconStarFilled size={18} className="text-secondary" /> (796
							reviews) |{" "}
							<IconThumbUpFilled size={18} className="text-secondary" /> 99%
						</p> */}
						<hr className="border-[1px] border-[#F1F1F1] mt-3 mb-3" />
						<Link href="/waitlist">
							<button className="py-2 px-3 rounded-lg bg-lightblue  flex flex-row justify-center items-center text-white lg:text-[12px] text-[10px] gap-1 w-full">
								Activate your profile
								<IconCaretRightFilled
									className="w-4 h-4 text-[#6B7280]"
									color="#A9B6DD"
								/>
							</button>
						</Link>
					</div>
				</div>
			</section>
			<div className="bg-[#fff] px-[4%] py-[12%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl mt-[-30px] lg:mt-[-100px] mx-4 mb-3">
				<div className="flex flex-col justify-center items-center align-middle gap-2">
					<SecondaryButton
						title="program"
						img="/icon.png"
						className="bg-white"
					/>
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						Comprehensive, Step-by-Step Learning
					</h2>
				</div>
				{/* <div className=" flex flex-row w-[100%] py-4">
					<Tabs defaultValue="about">
						<TabsList className="flex flex-row flex-wrap h-fit bg-[#EFF1F5] w-fit  ml-4 mr-4 gap-3 mx-auto">
							<TabsTrigger value="about">About the Course </TabsTrigger> |
							<TabsTrigger value="topics">Topics </TabsTrigger> |
							<TabsTrigger value="review"> Reviews</TabsTrigger>{" "}
						</TabsList>
						<div className="w-[100%] px-4 lg:mt-0">
							<TabsContent value="about">
								<div className="w-full">
									<hr className="border-[1px] border-[#F1F1F1] mt-3 mb-3" />
									<h2 className="text-[16px] lg:text-[18px] font-bold text-primary">
										Course Objectives:
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
										{course.objectives.map((item, index) => (
											<div
												key={index}
												className="flex flex-row justify-start items-start gap-3 mt-1 lg:mt-5">
												<Image
													src="/mark.png"
													width={20}
													height={20}
													alt="check"
													className="object-contain"
												/>
												<p className="text-xs lg:text-sm">{item}</p>
											</div>
										))}
									</div>

									<h2 className="text-[16px] lg:text-[18px] font-bold text-primary mt-6 lg:mt-10">
										This course includes:
									</h2>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full lg:w-[70%] mt-5">
										{course.includes.map((item, index) => {
											if (typeof item === "string") {
												return <p key={index}>{item}</p>;
											} else {
												const { text, Icon } = item;
												return (
													<div
														key={index}
														className="flex flex-row justify-start items-start gap-3 mt-1">
														<Icon className="text-primary" size={20} />
														<p className="text-xs lg:text-sm">{text}</p>
													</div>
												);
											}
										})}
									</div>

									<h2 className="text-[16px] lg:text-[18px] font-bold text-primary mt-6 lg:mt-10">
										Upon successful completion, learners will:
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
										{course.uponCompletion.map((item, index) => (
											<div
												key={index}
												className="flex flex-row justify-start items-start gap-3 mt-1 lg:mt-5">
												<Image
													src="/mark.png"
													width={20}
													height={20}
													alt="check"
													className="object-contain"
												/>
												<p className="text-xs lg:text-sm">{item}</p>
											</div>
										))}
									</div>

									<h2 className="text-[16px] lg:text-[18px] font-bold text-primary mt-6 lg:mt-10">
										Skill you&apos;ll gain
									</h2>
									<div className="flex flex-row flex-wrap justify-start gap-4 items-center w-full mt-5">
										{course.skillsGained.map((item, index) => (
											<div
												key={index}
												className="flex flex-row flex-wrap w-fit justify-start items-start gap-3 mt-1 bg-[#E5E7E8] px-3 py-1 rounded-lg">
												<p className="text-xs text-[#1F1F1F]">{item}</p>
											</div>
										))}
									</div>
								</div>
							</TabsContent>
							<TabsContent value="topics">
								<div className="w-full">
									<hr className="border-[1px] border-[#F1F1F1] mt-3 mb-3" />
									<h2 className="text-[16px] lg:text-[18px] font-bold text-primary">
										There are {course.noTopics} topics in this course:
									</h2>
									<p className="text-primary text-xs mt-3 w-full lg:w-[70%]">
										Lorem ipsum dolor sit amet consectetur. Turpis quam id id
										molestie ultrices egestas convallis. Urna venenatis mattis
										bibendum egestas et id a. Eget accumsan sit vitae id. Semper
										eros ante ornare accumsan egestas. Vulputate pharetra
										scelerisque consectetur.
									</p>
									<div className="p-3 border-[1px] border-[#F1F1F1] rounded-lg mt-6 w-full lg:w-[70%]">
										{course.topics?.map((item, index) => (
											<div
												key={index}
												className="w-fit justify-start items-start gap-3 mt-4 py-1 rounded-lg">
												<p className="text-xs text-[#1F1F1F] font-bold">
													{item.text}
												</p>
												<div className="flex flex-row justify-start items-center flex-wrap gap-4">
													<p className="text-[#636363] text-xs mt-3">
														Quiz {item.quiz}
													</p>
													<p className="text-[#636363] text-xs mt-3">•</p>
													<p className="text-[#636363] text-xs mt-3">
														Practice program {item.practise}
													</p>
													<p className="text-[#636363] text-xs mt-3">•</p>
													<p className="text-[#636363] text-xs mt-3">
														Video {item.video}
													</p>
													<p className="text-[#636363] text-xs mt-3">•</p>
													<p className="text-[#636363] text-xs mt-3">
														Live class {item.live}
													</p>{" "}
													<p className="text-[#636363] text-xs mt-3">•</p>
													<p className="text-[#636363] text-xs mt-3">
														{item.completion} weeks to complete
													</p>
												</div>
												<hr className="border-[1px] border-[#F1F1F1] mt-3 mb-3" />
											</div>
										))}
									</div>
								</div>
							</TabsContent>
							<TabsContent value="review">
								<hr className="border-[1px] border-[#F1F1F1] mt-3 mb-3" />
								<h2 className="text-[16px] lg:text-[18px] font-bold text-primary">
									No reviews yet:
								</h2>
								<p className="text-primary text-xs mt-3 w-full lg:w-[70%]">
									Lorem ipsum dolor sit amet consectetur. Turpis quam id id
									molestie ultrices egestas convallis. Urna venenatis mattis
									bibendum egestas et id a. Eget accumsan sit vitae id. Semper
									eros ante ornare accumsan egestas. Vulputate pharetra
									scelerisque consectetur.
								</p>
							</TabsContent>
						</div>
					</Tabs>
				</div> */}

				<div className="">
					<p className="text-center p-2 text-primary font-medium shadow-sm shadow-gray-500 rounded-lg w-full lg:w-[45%] mx-auto mt-2">
						About the Course
					</p>

					<hr className="my-8" />

					<div>
						<h2 className="text-[20px] text-primary font-semibold">
							{course.moduleOverview?.title}
						</h2>
						<p className="mt-3 text-[#2D2F31] text-sm font-normal">
							{course.moduleOverview?.description}
						</p>
					</div>

					<div>
						<h2 className="text-[20px] text-primary font-semibold mt-10">
							{course.knowledgeAndProgrammeOverview?.title}
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
							{course.knowledgeAndProgrammeOverview?.content.map(
								(section, index) => (
									<div key={index}>
										<div className="max-w-full mt-4">
											<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
												<Image
													src="/mark.png"
													width={14}
													height={14}
													alt="check"
												/>
												{section.title}
											</h2>
											<ol>
												{section.topics.map((topic, index) => (
													<li
														key={index}
														className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter ml-6 mt-2">
														<IconCircleFilled size={10} />
														{topic}
													</li>
												))}
											</ol>
										</div>
									</div>
								)
							)}
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.toolkit?.title}
						</h2>
						<div className="max-w-full mt-4">
							<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<Image src="/mark.png" width={14} height={14} alt="check" />
								<p className="font-medium">Programming Language:</p>
								<p>{course.toolkit?.programmingLanguage}</p>
							</h2>
						</div>
						<div className="max-w-full mt-4">
							<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<Image src="/mark.png" width={14} height={14} alt="check" />
								<p className="font-medium">Libraries:</p>
								<p>{course.toolkit?.libraries}</p>
							</h2>
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.skillsAndAbilities?.title}
						</h2>
						<div className="max-w-full mt-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full lg:w-[80%]">
								{course.skillsAndAbilities?.content.map((lib, index) => (
									<div
										key={index}
										className="flex flex-row justify-start items-center gap-3">
										<Image src="/mark.png" width={14} height={14} alt="check" />
										<p> {lib}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.courseFormatAndAssessment?.title}
						</h2>
						<div className="max-w-full mt-4">
							<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<Image src="/mark.png" width={14} height={14} alt="check" />
								<p className="font-medium">Expected Hours of Live Streaming:</p>
								<p className="font-normal">
									{course.courseFormatAndAssessment?.liveStreamingHours} Hours
								</p>
							</h2>
						</div>

						<div className="max-w-full mt-4">
							<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<Image src="/mark.png" width={14} height={14} alt="check" />
								<p className="font-medium">Expected Hours of Self Learning:</p>
								<p className="font-normal">
									{course.courseFormatAndAssessment?.selfLearningHours} Hours
								</p>
							</h2>
						</div>

						<div className="max-w-full mt-4">
							<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<Image src="/mark.png" width={14} height={14} alt="check" />
								<p className="font-medium">
									Number of Assessments and Project Work:
								</p>
								<p className="font-normal">
									{
										course.courseFormatAndAssessment?.assessmentsAndProjects
											.practiceQuestions
									}{" "}
									Practice Questions and{" "}
									{
										course.courseFormatAndAssessment?.assessmentsAndProjects
											.mcqs
									}{" "}
									MCQs
								</p>
							</h2>
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.availableResources?.title}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full lg:w-[70%] mt-5">
							{course.includes.map((item, index) => {
								if (typeof item === "string") {
									return <p key={index}>{item}</p>;
								} else {
									const { text, Icon } = item;
									return (
										<div
											key={index}
											className="flex flex-row justify-start items-start gap-3 mt-1">
											<Icon className="text-primary" size={20} />
											<p className="text-xs lg:text-sm">{text}</p>
										</div>
									);
								}
							})}
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.resourcesOnDemand?.title}
						</h2>
						<div className="max-w-full mt-4">
							<h2 className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<Image src="/mark.png" width={14} height={14} alt="check" />
								<p className="font-normal">
									{course.resourcesOnDemand?.content}
								</p>
							</h2>
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.expectedLearningOutcomes?.title}
						</h2>
						<div className="max-w-full mt-4">
							<div className="flex flex-col justify-start gap-2 font-medium text-sm font-inter">
								<p className="text-[#2D2F31] text-sm">
									By the end of this module, you will be able to:
								</p>

								{course.expectedLearningOutcomes?.content.map(
									(title, index) => (
										<li
											key={index}
											className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter ml-6 mt-2">
											<IconCircleFilled size={10} />
											{title}
										</li>
									)
								)}
							</div>
						</div>
					</div>

					<div className="mt-10 pr-0 lg:pr-[16%]">
						<h2 className="text-[20px] text-primary font-semibold">
							{course.prerequisitesAndFuturePathway?.title}
						</h2>
						<div className="max-w-full mt-4">
							<div className="flex flex-row justify-start items-center gap-2 font-medium text-sm font-inter">
								<p className="font-normal">
									{course.prerequisitesAndFuturePathway?.futurePathway}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="bg-gradient-to-b from-[#FFF0F0] to-[#FAFAFA] p-[4%] shadow-md shadow-gray-200  rounded-xl  mx-4 mb-3 mt-6">
				<div className="bg-white p-5 border-[1px] border-[#FFF0F0] rounded-lg flex flex-col lg:flex-row w-full items-center">
					<div className="w-full lg:w-[65%]">
						<h2 className="text-[16px] lg:text-[18px] font-bold text-primary">
							Earn a career certificate
						</h2>
						<p className="text-primary text-xs mt-3 w-full lg:w-[70%]">
							Add this credential to your LinkedIn profile, resume, or CV
						</p>
						<p className="text-primary text-xs w-full lg:w-[70%]">
							Share it on social media and in your performance review
						</p>
					</div>
					<div className="w-full lg:w-[35%] flex flex-row justify-start lg:justify-end mt-[20px] mb-[-20px] lg:mt-[-60px] lg:mb-[-60px]">
						<Image
							src="/cert.png"
							alt="certificate"
							width={333}
							height={214}
							className="object-contain"
						/>
					</div>
				</div>
			</div> */}
			<Faq />
			<Testimonials />
			<PreFooter />
		</div>
	);
}

export default CourseDetails;
