import Image from "next/image";

function WhoWeAreSolutions() {
	return (
		<div className="px-6">
			<div className="bg-white p-8 md:p-[6%] w-full sm:w-[65%]">
				<h2 className="text-4xl font-bold text-quansk-orange mb-4">
					Who We Are
				</h2>
				<p className="text-lg text-quansk-dark mb-6">
					<strong className="font-extrabold">Quanskill</strong> is a hybrid
					education and AI solutions company committed to enabling Southeast
					Asia's transformation through AI, Machine Learning (ML), and advanced
					digital technologies.
				</p>

				<p className="text-lg text-quansk-dark mb-8">
					We serve automation companies, manufacturing giants, and smart factory
					integrators through:
				</p>
			</div>
			<div className="bg-gradient-to-b from-[#f75c24] to-[#f78b26] p-[6%] flex flex-col sm:flex-row justify-between items-start">
				<div className="flex-1 text-white mb-6 lg:mb-0 lg:mr-8">
					<ul className="list-disc ml-6 space-y-3 text-lg font-medium">
						<li>AI/ML consulting & implementation</li>
						<li>Workforce upskilling & talent pipelines</li>
						<li>Custom integration & AI agent solutions</li>
					</ul>
				</div>
				<Image
					src="/MEN.png"
					alt="hero"
					width={500}
					height={500}
					className="mt-[0px] sm:mt-[-200px]"
				/>
			</div>
		</div>
	);
}

export default WhoWeAreSolutions;
