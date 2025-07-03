import LearnCard from "./LearnCard";

function Learning() {
	const handleOpenWhatsApp = () => {
		const phoneNumber = "+84942322620"; // Replace with the actual phone number
		const message =
			"Hello, I would like to know more about the learning resources.";
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(url, "_blank");
	};
	return (
		<div className="mt-2 w-full">
			<hr className="border-[1px] border-[#F1F1F1] mt-10 mb-10" />
			<div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center gap-3">
				<LearnCard
					img="/live-icon.png"
					title="Live Classes"
					description="Engage with experts in real-time for active learning."
					bg="/live.png"
					handleClick={() => handleOpenWhatsApp()}
				/>
				<LearnCard
					img="/quanlab-icon.png"
					title="QuanLabs"
					description="Apply your knowledge in guided lab session"
					bg="/quanlabs.png"
					handleClick={() => handleOpenWhatsApp()}
				/>
				<LearnCard
					img="/library-icon.png"
					title="24/7 Self-Help Library"
					description="Resources available anytime, anywhere."
					bg="/library.png"
					handleClick={() => handleOpenWhatsApp()}
				/>
				<LearnCard
					img="/library-icon.png"
					title="One-on-One Mentorship"
					description="Get personalized guidance from industry experts."
					bg="/one.png"
					handleClick={() => handleOpenWhatsApp()}
				/>
			</div>
		</div>
	);
}

export default Learning;
