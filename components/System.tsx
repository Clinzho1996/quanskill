import SystemCard from "./SystemCard";

function System() {
	return (
		<div className="mt-2 w-full">
			<hr className="border-[1px] border-[#F1F1F1] mt-10 mb-10" />
			<div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center gap-3">
				<SystemCard
					img="/live-icon.png"
					title="Personalized Mentorship (QuanTors)"
					description="One-on-one career guidance from industry experts."
					bg="/quantor.png"
					handleClick={() => {}}
				/>
				<SystemCard
					img="/quanlab-icon.png"
					title="Community Network (QuanNet)"
					description="Collaborate and grow with like-minded learners and experts."
					bg="/quanmunity.png"
					handleClick={() => {}}
				/>
			</div>
		</div>
	);
}

export default System;
