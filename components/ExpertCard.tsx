import Image from "next/image";

function ExpertCard({
	img,
	name,
	title,
	handleClick,
}: {
	img: string;
	name: string;
	title: string;
	handleClick?: () => void;
}) {
	return (
		<div>
			<div
				className="flex flex-col items-center justify-center gap-2 p-2 bg-[#F1F1F1] border-[3px] border-white rounded-xl shadow-lg shadow-[#0000001F] hover:shadow-lg hover:shadow-[#FF9100] transition-all duration-300 ease-in-out cursor-pointer"
				onClick={handleClick}>
				<Image
					src={img}
					width={350}
					height={150}
					alt="expert"
					className="w-full h-[300px]  rounded-xl object-cover"
				/>
				<div className="py-4">
					<h2 className="text-[#111827] text-lg font-semibold font-inter">
						{name}
					</h2>
					<p className="text-[#6B7280] text-sm font-normal font-inter text-center">
						{title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ExpertCard;
