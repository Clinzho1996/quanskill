import ExpertButton from "./ExpertButton";
import SecondaryButton from "./SecondaryButton";

function ExpertAreas() {
	return (
		<section className="bg-white p-4">
			<div className="expert px-[6%] py-[6%] lg:px-10 lg:py-14 rounded-lg">
				<div className="flex flex-col justify-center items-center gap-5">
					<SecondaryButton
						img="/icon.png"
						title="areas of expertise"
						className="bg-white"
					/>
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary leading-[28px] sm:leading-[40px] w-full lg:w-[50%] text-center">
						Our instructors specialize in today&apos;s most in-demand skills
					</h2>
				</div>

				<div className="flex flex-row mt-10 gap-3 w-full">
					<div className="overflow-container">
						<div className="scroll-animation">
							<ExpertButton
								img="/check.png"
								title="Python Programming & Advanced Applications"
							/>
							<ExpertButton
								img="/check.png"
								title="Mathematics for Data Science & AI"
							/>
							<ExpertButton
								img="/check.png"
								title="Machine Learning & Deep Learning"
							/>
							<ExpertButton
								img="/check.png"
								title="Generative AI & Large Language Models"
							/>
							<ExpertButton
								img="/check.png"
								title="Natural Language Processing"
							/>
							<ExpertButton
								img="/check.png"
								title="Python Programming & Advanced Applications"
							/>
							<ExpertButton
								img="/check.png"
								title="Mathematics for Data Science & AI"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-row mt-6 gap-3 w-full">
					<div className="overflow-container">
						<div className="scroll-animation-y">
							<ExpertButton
								img="/check.png"
								title="Mathematics for Data Science & AI"
							/>
							<ExpertButton
								img="/check.png"
								title="Generative AI & Large Language Models"
							/>
							<ExpertButton
								img="/check.png"
								title="Data Engineering & Analytics"
							/>
							<ExpertButton
								img="/check.png"
								title="Python Programming & Advanced Applications"
							/>
							<ExpertButton
								img="/check.png"
								title="Natural Language Processing"
							/>
							<ExpertButton
								img="/check.png"
								title="Python Programming & Advanced Applications"
							/>
							<ExpertButton
								img="/check.png"
								title="Mathematics for Data Science & AI"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ExpertAreas;
