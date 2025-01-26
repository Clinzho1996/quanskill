import Image from "next/image";

function AboutCard({
	img,
	title,
	description,
}: {
	img: string;
	title: string;
	description: string;
}) {
	return (
		<div className="h-[180px] w-[300px] shadow-lg rounded-lg p-1">
			<div className="p-4 bg-ash w-full h-full rounded-lg">
				<div className="flex flex-row justify-start items-center gap-3">
					<Image
						alt="avatar"
						src={img}
						width={50}
						height={50}
						className="w-12 h-12"
					/>
					<h2 className="text-sm lg:text-[16px] font-bold">{title}</h2>
				</div>
				<p className="text-xs lg:text-sm text-[#6B7280] mt-3">{description}</p>
			</div>
		</div>
	);
}

export default AboutCard;
