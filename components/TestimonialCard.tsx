import Image from "next/image";

function TestimonialCard({
	img,
	name,
	title,
	description,
}: {
	img: string;
	name: string;
	title: string;
	description: string;
}) {
	return (
		<div className="p-3">
			<div className="bg-ash rounded-xl p-5 lg:p-8  mr12 w-[270px] lg:w-[360px]">
				<div className="flex flex-row justify-start gap-4 items-center">
					<div>
						<Image
							alt="avatar"
							src={img}
							width={40}
							height={40}
							className="rounded-full w-10 h-10"
						/>
					</div>
					<div>
						<p className="text-xs lg:text-sm text-primary font-bold">{name}</p>
						<p className="text-[10px] lg:text-xs text-[#5E5F6E]">{title}</p>
					</div>
				</div>

				<p className="text-[#4B5563] text-[12px] lg:text-sm font-inter  mt-6">
					{description}
				</p>
			</div>
		</div>
	);
}

export default TestimonialCard;
