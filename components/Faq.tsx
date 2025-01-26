import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

function Faq() {
	return (
		<section className="bg-white p-4">
			<div className="bg-[#F5F5F5] px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg">
				<div className="flex flex-col justify-center items-center align-middle gap-2">
					<SecondaryButton
						title="have some questions"
						img="/icon.png"
						className="bg-white"
					/>
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						<span className="text-primary">Frequently Asked </span>
						Questions
					</h2>
					<Image
						src="/line.png"
						alt="logo"
						width={130}
						height={30}
						className="flex flex-row  justify-center ml-[25%] mt-[-10px] lg:mt-[-20px] items-center object-contain"
					/>
				</div>

				{/* accordion */}
				<div className="w-full lg:w-[70%]  p-4 mt-5 lg:mt-10 flex-row flex justify-center rounded-lg mx-auto">
					<Accordion type="single" collapsible defaultValue="item-1">
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-primary">
								What kind of courses does Quanskill offer?
							</AccordionTrigger>
							<AccordionContent className="text-gray-600">
								Quanskill offers a wide range of courses focused on Machine
								Learning, Python programming, and related fields like Data
								Science, Artificial Intelligence, and Deep Learning. These
								courses are designed for both beginners and professionals,
								providing step-by-step instructions and practical projects to
								enhance your learning experience.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className="text-primary">
								Do I need prior programming experience to take your Python
								courses?
							</AccordionTrigger>
							<AccordionContent className="text-gray-600">
								No prior programming experience is required! Our Python courses
								are beginner-friendly and start with the basics. If you&apos;re
								completely new to programming, we guide you through foundational
								concepts to help you get started. For more experienced learners,
								we also offer advanced Python topics tailored to specific
								applications like Machine Learning and Data Science.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className="text-primary">
								What support is available if I get stuck while learning?
							</AccordionTrigger>
							<AccordionContent className="text-gray-600">
								Quanskill offers multiple support channels to assist you: Access
								to a community of learners and instructors through forums.
								Dedicated Q&A sections for each course. Regularly scheduled live
								sessions for direct interaction with instructors. Additionally,
								our customer support team is available to resolve technical or
								account-related issues.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger className="text-primary">
								How are Machine Learning courses structured on Quanskill?
							</AccordionTrigger>
							<AccordionContent className="text-gray-600">
								Our Machine Learning courses are divided into beginner,
								intermediate, and advanced levels. You&apos;ll start with
								essential concepts like supervised and unsupervised learning,
								move on to practical tools like NumPy, pandas, and scikit-learn,
								and then explore advanced topics such as neural networks and
								model deployment. Each course includes hands-on projects to
								reinforce your skills.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger className="text-primary">
								Will I get a certificate upon completing a course?
							</AccordionTrigger>
							<AccordionContent className="text-primary">
								Yes, Quanskill provides certificates for all completed courses.
								These certificates are a great way to showcase your newly
								acquired skills and can be shared on platforms like LinkedIn or
								added to your resume to boost your career prospects in tech
								fields.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
}

export default Faq;
