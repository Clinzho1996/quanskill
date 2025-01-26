import { cn } from "@/lib/utils";
import Image from "next/image";

function Button({
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
				"p-3 rounded-lg shadow-sm shadow-neutral-500 flex flex-row items-center text-primary lg:text-[12px] text-[10px] gap-1"
			)}>
			{title}
			<Image
				src={img}
				alt="apple"
				width={13}
				height={13}
				className="object-fit object-contain"
			/>{" "}
		</button>
	);
}

export default Button;
