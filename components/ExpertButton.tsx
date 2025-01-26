import { cn } from "@/lib/utils";
import Image from "next/image";
function ExpertButton({
	title,
	img,
	className,
}: {
	title: string;
	img: string;
	className?: string;
}) {
	return (
		<button
			className={cn(
				className,
				"py-1 px-2 rounded-full border-[1px] border-[#6B728080] uppercase flex flex-row items-center lg:text-[14px] text-[#6B7280] text-[10px] gap-2 w-fit"
			)}>
			<Image
				src={img}
				alt="apple"
				width={15}
				height={15}
				className="w-[20px] h-[20px] lg:h-[15px] lg:-[15px] object-contain"
			/>{" "}
			{title}
		</button>
	);
}

export default ExpertButton;
