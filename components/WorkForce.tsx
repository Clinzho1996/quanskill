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
		<div className="px-6">
			<div className="heroWorkforce p-[6%]">
				<div className="w-full sm:w-[50%]">
					<h2 className="text-3xl font-bold text-white pt-4 mb-8">
						Our Solutions For Tech & Automation Companies
					</h2>
					<h3 className="text-xl font-semibold text-white mb-4">
						1. AI/ML Consulting & Implementation
					</h3>
					<p className="text-lg text-white font-normal mb-6">
						Transform your operations with intelligence
					</p>
				</div>

				<div className="overflow-x-auto shadow-xl rounded-lg mt-8">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-secondary text-white">
							<tr className="m-4">
								<th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
									Domains
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
									Key Services
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
									Sample Use Cases
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{solutions.map((row, index) => (
								<tr
									key={index}
									className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
									<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-quansk-dark">
										{row.domain}
									</td>
									<td className="px-6 py-4 text-sm text-gray-700">
										{row.keyServices}
									</td>
									<td className="px-6 py-4 text-sm text-gray-700">
										{row.sampleUseCases}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className="bg-gradient-to-b from-[#f75c24] to-[#f78b26] h-fit px-[6%] pt-[6%] flex flex-col sm:flex-row justify-between items-start">
				<div className="flex-1 text-white mb-6 lg:mb-0 lg:mr-10">
					<h3 className="text-xl font-semibold text-white mb-2">
						2. Workforce Skill Enhancement
					</h3>
					<p className="text-2xl font-bold text-white mb-6">
						Your talent, future-ready.
					</p>
					<p className="text-lg mb-4">
						We offer modular training aligned with Industry 4.0 priorities:
					</p>
					<ul className="list-disc ml-6 space-y-3 text-lg font-medium">
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
					className="mt-[0px] sm:translate-y-[100px]"
				/>
			</div>
			<div className="px-[6%] pt-[15%]">
				<div className="flex sm:flex-row w-full flex-wrap justify-start items-center gap-6">
					<div className="flex flex-row justify-start items-center gap-2">
						<Image
							src="/classes.png"
							alt="hero"
							width={50}
							height={50}
							className="object-contain"
						/>
						<p className="text-lg font-normal text-black ">Live Classes</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-2">
						<Image
							src="/labs.png"
							alt="hero"
							width={50}
							height={50}
							className="object-contain"
						/>
						<p className="text-lg font-normal text-black ">Hands-on Labs</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-2">
						<Image
							src="/online.png"
							alt="hero"
							width={50}
							height={50}
							className="object-contain"
						/>
						<p className="text-lg font-normal text-black ">Online Platform</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-2">
						<Image
							src="/expert.png"
							alt="hero"
							width={50}
							height={50}
							className="object-contain"
						/>
						<p className="text-lg font-normal text-black ">Expert Mentors</p>
					</div>
				</div>
				<p className="text-lg font-bold text-black ml-auto mt-4">
					Cost: From <span className="text-2xl">$75</span>/module with
					certification
				</p>
			</div>

			<div className="w-full border-[1px] border-black mt-20 relative">
				<div className="bg-gradient-to-b from-[#f75c24] to-[#f78b26] h-fit px-[6%] py-[6%] w-full sm:w-[65%] ml-[6%] mb-[-300px] z-10 relative">
					<h3 className="text-2xl font-bold text-white mb-2">
						3. Custom Digital Integration & Co-Development
					</h3>
					<p className="text-xl italic font-normal text-white mb-6">
						Need to pilot a solution fast? Let's{" "}
						<span className="underline decoration-quansk-orange decoration-2">
							build it together.
						</span>
					</p>

					<div className="flex flex-col lg:flex-row items-center">
						<div className="flex-1 order-2 lg:order-1 mt-6 lg:mt-0 lg:pr-10">
							<ul className="list-disc ml-6 space-y-3 text-lg text-white font-medium mb-6">
								<li>Private LLM/GPT integration for manufacturing data</li>
								<li>Agentic AI for marketing & operations automation</li>
								<li>Computer Vision systems using your existing CCTV feeds</li>
								<li>Custom dashboards and analytics using Python/Streamlit</li>
							</ul>
							<p className="text-lg text-white font-normal mt-6">
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
			</div>
		</div>
	);
}

export default WorkForce;
