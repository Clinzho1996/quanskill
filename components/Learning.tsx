import LearnCard from "./LearnCard";

function Learning() {
	return (
		<div className="mt-2 w-full">
			<hr className="border-[1px] border-[#F1F1F1] mt-10 mb-10" />
			<div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center gap-3">
				<LearnCard
					img="/live-icon.png"
					title="Live Classes"
					description="Engage with instructors in real-time for active learning."
					bg="/live.png"
					handleClick={() => {}}
				/>
				<LearnCard
					img="/quanlab-icon.png"
					title="QuanLabs"
					description="Apply your knowledge in guided lab session"
					bg="/quanlabs.png"
					handleClick={() => {}}
				/>
				<LearnCard
					img="/library-icon.png"
					title="24/7 Self-Help Library"
					description="Resources available anytime, anywhere."
					bg="/library.png"
					handleClick={() => {}}
				/>
			</div>
		</div>
	);
}

export default Learning;
