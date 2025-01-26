"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

function SystemCard({
	img,
	title,
	description,
	bg,
	handleClick,
}: {
	img: string;
	title: string;
	description: string;
	bg: string;
	handleClick: () => void;
}) {
	return (
		<div className="h-[300px] w-full lg:w-[550px] lg:h-[330px] shadow-lg rounded-lg p-1 ">
			<div className="px-4 pt-4 pb-0 bg-ash w-full h-full rounded-lg relative">
				<div className="flex flex-row justify-between items-center">
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
					<div
						onClick={handleClick}
						className="flex p-2 bg-transparent border-2 border-[#DFDFDF] w-[44px] h-[44px] cursor-pointer items-center align-middle justify-center rounded-full hover:bg-white">
						<IconArrowUpRight />
					</div>
				</div>
				<p className="text-xs lg:text-sm text-[#6B7280] mt-3">{description}</p>
				<Image
					src={bg}
					alt="bg"
					width={400}
					height={180}
					className="absolute bottom-0 w-[90%] h-[180px] object-cover mx-auto right-0 left-0 rounded-t-lg "
				/>
			</div>
		</div>
	);
}

export default SystemCard;
