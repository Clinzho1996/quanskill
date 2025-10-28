import Image from "next/image";

interface SolutionRow {
	domain: string;
	keyServices: string;
	sampleUseCases: string;
}

function WorkForce() {
	const solutions: SolutionRow[] = [
		{
			domain: "Smart Manufacturing",
			keyServices:
				"Predictive maintenance, visual inspection, robotics intelligence",
			sampleUseCases: "Reduce downtime, detect defects",
		},
		{
			domain: "Industrial Automation",
			keyServices:
				"Control optimization with Reinforcement Learning, real-time data processing",
			sampleUseCases: "PLC/SCADA data for decision pipeline",
		},
		{
			domain: "Smart Logistics",
			keyServices: "AI-driven warehouse ops, route optimization",
			sampleUseCases: "Reduce fuel & time costs",
		},
		{
			domain: "Energy Efficiency",
			keyServices: "AI load balancing, demand forecasting",
			sampleUseCases: "Save energy & reduce emissions",
		},
		{
			domain: "Digital Twins & Simulation",
			keyServices: "AI-powered simulation modeling",
			sampleUseCases: "Train robotics before live deployment",
		},
	];
	return (
		<div className="px-4 sm:px-6">
			{/* Hero Section */}
			<div className="heroWorkforce p-4 sm:p-[6%]">
				<div className="w-full sm:w-[50%]">
					<h2 className="text-2xl sm:text-3xl font-bold text-white pt-4 mb-6 sm:mb-8">
						Our Solutions For Tech & Automation Companies
					</h2>
					<h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
						1. AI/ML Consulting & Implementation
					</h3>
					<p className="text-base sm:text-lg text-white font-normal mb-4 sm:mb-6">
						Transform your operations with intelligence
					</p>
				</div>

				{/* Table Section */}
				<div className="overflow-x-auto shadow-xl rounded-lg mt-6 sm:mt-8">
					<table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
						<thead className="bg-secondary text-white">
							<tr className="m-4">
								<th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
									Domains
								</th>
								<th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
									Key Services
								</th>
								<th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase tracking-wider">
									Sample Use Cases
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{solutions.map((row, index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
									<td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-quansk-dark">
										{row.domain}
									</td>
									<td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
										{row.keyServices}
									</td>
									<td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
										{row.sampleUseCases}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Workforce Skill Enhancement Section */}
			<div className="bg-gradient-to-b from-[#f75c24] to-[#f78b26] h-fit px-4 sm:px-[6%] pt-6 sm:pt-[6%] flex flex-col lg:flex-row justify-between items-start">
				<div className="flex-1 text-white mb-6 lg:mb-0 lg:mr-10">
					<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
						2. Workforce Skill Enhancement
					</h3>
					<p className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
						Your talent, future-ready.
					</p>
					<p className="text-base sm:text-lg mb-4">
						We offer modular training aligned with Industry 4.0 priorities:
					</p>
					<ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-3 text-base sm:text-lg font-medium">
						<li>AI for Industrial Engineers</li>
						<li>ML for Automation Experts</li>
						<li>Computer Vision for Quality Inspection</li>
						<li>DataOps & MLOps for Engineers</li>
						<li>Edge AI & Embedded ML</li>
					</ul>
				</div>
				<Image
					src="/men3.png"
					alt="hero"
					width={600}
					height={500}
					className="mt-4 sm:mt-0 w-full max-w-md mx-auto lg:max-w-none lg:w-auto lg:translate-y-[100px]"
				/>
			</div>

			{/* Features Section */}
			<div className="px-4 sm:px-[6%] pt-8 sm:pt-[15%]">
				<div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
					<div className="flex flex-row justify-start items-center gap-2 min-w-[140px]">
						<Image
							src="/classes.png"
							alt="hero"
							width={40}
							height={40}
							className="object-contain"
						/>
						<p className="text-sm sm:text-lg font-normal text-black">
							Live Classes
						</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-2 min-w-[140px]">
						<Image
							src="/labs.png"
							alt="hero"
							width={40}
							height={40}
							className="object-contain"
						/>
						<p className="text-sm sm:text-lg font-normal text-black">
							Hands-on Labs
						</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-2 min-w-[140px]">
						<Image
							src="/online.png"
							alt="hero"
							width={40}
							height={40}
							className="object-contain"
						/>
						<p className="text-sm sm:text-lg font-normal text-black">
							Online Platform
						</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-2 min-w-[140px]">
						<Image
							src="/expert.png"
							alt="hero"
							width={40}
							height={40}
							className="object-contain"
						/>
						<p className="text-sm sm:text-lg font-normal text-black">
							Expert Mentors
						</p>
					</div>
				</div>
				<p className="text-base sm:text-lg font-bold text-black text-center sm:text-left mt-4">
					Cost: From <span className="text-xl sm:text-2xl">$75</span>/module
					with certification
				</p>
			</div>

			{/* Custom Digital Integration Section */}
			<div className="w-full border-[1px] border-gray-300 mt-12 sm:mt-20 relative">
				<div className="bg-gradient-to-b from-[#f75c24] to-[#f78b26] h-fit px-4 sm:px-[6%] py-6 sm:py-[6%] w-full lg:w-[65%] ml-0 lg:ml-[6%] mb-[-150px] sm:mb-[-300px] z-10 relative">
					<h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
						3. Custom Digital Integration & Co-Development
					</h3>
					<p className="text-lg sm:text-xl italic font-normal text-white mb-4 sm:mb-6">
						Need to pilot a solution fast? Let&apos;s{" "}
						<span className="underline decoration-quansk-orange decoration-2">
							build it together.
						</span>
					</p>

					<div className="flex flex-col lg:flex-row items-center">
						<div className="flex-1 order-2 lg:order-1 mt-4 lg:mt-0 lg:pr-10">
							<ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-3 text-base sm:text-lg text-white font-medium mb-4 sm:mb-6">
								<li>Private LLM/GPT integration for manufacturing data</li>
								<li>Agentic AI for marketing & operations automation</li>
								<li>Computer Vision systems using your existing CCTV feeds</li>
								<li>Custom dashboards and analytics using Python/Streamlit</li>
							</ul>
							<p className="text-base sm:text-lg text-white font-normal mt-4 sm:mt-6">
								We work under <span className="text-white font-bold">NDA</span>,
								co-develop MVPs, and help you scale them securely.
							</p>
						</div>
					</div>
				</div>
				<div className="z-0">
					<Image
						src="/bg5.png"
						alt="logo"
						width={1600}
						height={400}
						className="w-full z-0"
					/>
				</div>

				{/* Why Choose Quanskill Section */}
				<div>
					<div className="p-4 sm:p-[6%] flex justify-end mb-[-80px] sm:mb-[-150px] z-10 relative">
						<Image
							src="/men2.png"
							alt="logo"
							width={600}
							height={400}
							className="w-full sm:w-[70%] z-0 object-contain"
						/>
					</div>
					<div className="bg-gradient-to-b from-[#f75523] to-[#f79226] px-4 sm:px-[6%] pb-6 sm:pb-[6%] w-full relative pt-16 sm:pt-[14%]">
						<div className="w-full text-white flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
							<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
								Why Choose Quanskill?
							</h2>
							<ul className="list-disc ml-4 sm:ml-6 space-y-3 sm:space-y-4 text-sm font-medium">
								<li>
									<strong className="font-extrabold">
										Built for Industry 4.0:
									</strong>{" "}
									Curriculum and solutions aligned with MES, ERP, PLC, IIoT, and
									Smart Factory techniques.
								</li>
								<li>
									<strong className="font-extrabold">
										Affordable & Scalable:
									</strong>{" "}
									Start with just $75/module or a 3-month consulting block.
								</li>
								<li>
									<strong className="font-extrabold">
										Trusted by Engineers:
									</strong>{" "}
									3,000+ learners, 25+ companies trained, 8+ countries.
								</li>
								<li>
									<strong className="font-extrabold">
										Customizable & Localized:
									</strong>{" "}
									Content adapted for your equipment, your industry.
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-gradient-to-b from-[#f75523] to-[#f79226] px-4 sm:px-[6%] py-6 sm:py-[6%] w-full relative">
						<Image
							src="/hand.png"
							alt="logo"
							width={1600}
							height={400}
							className="w-full z-0 mb-[-100px] sm:mb-[-200px]"
						/>
					</div>

					{/* Partner With Us Section */}
					<div className="bg-white px-4 sm:px-[6%] py-8 sm:py-[6%] w-full mt-12 sm:mt-[100px]">
						<h2 className="text-2xl sm:text-4xl font-bold text-quansk-orange mb-4">
							Partner With Us
						</h2>
						<p className="text-base sm:text-lg text-quansk-dark font-bold mb-4 sm:mb-6">
							Perfect for:
						</p>

						<ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-3 text-base sm:text-lg text-quansk-dark font-medium">
							<li>
								<strong className="font-extrabold">
									Automation and robotics firms
								</strong>{" "}
								(e.g., FANUC, Bosch Rexroth)
							</li>
							<li>
								<strong className="font-extrabold">
									Smart logistics providers
								</strong>{" "}
								(e.g., Smart Cobot, TWINNY)
							</li>
							<li>
								<strong className="font-extrabold">
									Electronics manufacturers
								</strong>{" "}
								(e.g., Panasonic, LG, Samsung)
							</li>
							<li>
								<strong className="font-extrabold">
									System integrators & engineering service firms
								</strong>
							</li>
							<li>
								<strong className="font-extrabold">
									Industrial parks & innovation hubs
								</strong>{" "}
								(e.g., VSIP, VGU)
							</li>
						</ul>
					</div>
				</div>

				<div>
					<div className="p-[6%] flex justify-end w-full">
						<Image
							src="/map.png"
							alt="logo"
							width={1200}
							height={700}
							className="w-full sm:w-[70%] z-0 object-contain"
						/>
					</div>

					<div className="px-[6%] pb-[6%] mt-[-120px] sm:mt-[-150px]">
						<h2 className="text-4xl font-bold mb-2 text-quansk-orange">
							<span className="text-quansk-orange">Regional Reach</span> –
						</h2>
						<h2 className="text-4xl font-bold text-quansk-orange mb-8">
							Global Vision
						</h2>

						<div className="text-lg text-quansk-dark font-medium">
							<p className="mb-2">
								<strong className="font-extrabold">Operating across</strong>{" "}
								Vietnam, Indonesia, Malaysia, and India
							</p>
							<p>
								<strong className="font-extrabold">
									Multi-language support:
								</strong>{" "}
								Vietnamese | English | Korean (coming soon)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkForce;
