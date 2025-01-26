import Image from "next/image";

function MegaCard({
	img,
	title,
	description,
	route,
}: {
	img: string;
	title: string;
	description: string;
	route: string;
}) {
	return (
		<div
			className="h-[120px] w-[300px] shadow-lg rounded-lg p-1 border-[3px] border-white cursor-pointer"
			onClick={() => (window.location.href = route)}>
			<div className="px-4 py-1 bg-ash w-full h-full rounded-lg">
				<div className="flex flex-row justify-start items-center gap-3">
					<Image
						alt="avatar"
						src={img}
						width={50}
						height={50}
						className="w-12 h-12"
					/>
					<h2 className="text-[12px] lg:text-[14px] font-bold font-inter text-[#202431]">
						{title}
					</h2>
				</div>
				<p className="text-[10px] lg:text-[12px] text-[#6B7280] mt-3">
					{description}
				</p>
			</div>
		</div>
	);
}

export default MegaCard;
