import Image from "next/image";

function ExpertInfo() {
	return (
		<section className="bg-white p-4">
			<div className="bg-[#F8F8F8] px-[6%] py-[12%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl">
				<div>
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						Why Our Experts Make the Difference
					</h2>
					<Image
						src="/vec.png"
						alt="logo"
						width={130}
						height={30}
						className="flex flex-row  justify-center ml-[30%] lg:ml-[60%] mt-[10px] lg:mt-[-10px] items-center object-contain"
					/>
					<hr className="my-6" />
				</div>
				<div className="border-[4px] border-white rounded-lg p-4 lg:p-10 flex flex-col lg:flex-row justify-between items-center align-bottom w-full">
					<div className="w-full lg:w-[50%]">
						<h2 className="text-primary text-[16px]  font-inter font-bold mt-4">
							Real-World Experience That Matters
						</h2>
						<p className="text-[#6B7280] text-[14px] font-normal mt-4 mr-0 lg:mr-10">
							Our instructors have built and deployed AI solutions at scale for
							global organizations. They bring practical insights from the
							frontlines of technology, ensuring you learn what actually works
							in the industry—not just theory.
						</p>

						<h2 className="text-primary text-[16px]  font-inter font-bold mt-4">
							Deep Technical Expertise
						</h2>
						<p className="text-[#6B7280] text-[14px] font-normal mt-4 mr-0 lg:mr-10">
							<span className="text-secondary mb-4">&gt;&gt; </span> Architects
							of large-scale machine learning systems <br />{" "}
							<span className="text-secondary mb-4">&gt;&gt; </span>
							Contributors to cutting-edge AI research <br />{" "}
							<span className="text-secondary mb-4">&gt;&gt; </span>Specialists
							in advanced deep learning applications <br />{" "}
							<span className="text-secondary mb-4">&gt;&gt; </span> Experts in
							the latest LLM and generative AI technologies
						</p>

						<h2 className="text-primary text-[16px]  font-inter font-bold mt-4">
							Teaching Excellence
						</h2>
						<p className="text-[#6B7280] text-[14px] font-normal mt-4 mr-0 lg:mr-10">
							Every Quanskill expert is selected not just for their technical
							prowess, but for their ability to make complex concepts
							accessible. They&apos;re committed to your success, offering
							personalized guidance and real-world context for every concept you
							learn.
						</p>
					</div>
					<div className="w-full lg:w-[50%] mt-10 lg:mt-0">
						<Image
							src="/ins.png"
							width={482}
							height={486}
							alt="expert"
							className="w-[90%] h-full object-contain "
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ExpertInfo;
