import { useCart } from "@/context/CartContext";
import {
	IconCaretRightFilled,
	IconCircleFilled,
	IconShare,
	IconShoppingCart,
} from "@tabler/icons-react";
import Image from "next/image";

function CourseCard({
	id,
	img,
	title,
	description,
	level,
	users,
	items,
	category,
	price,
	handleClick,
}: {
	id: string;
	img: string;
	title: string;
	description: string;
	level: string;
	users: string;
	items: string;
	category: string;
	price: string;
	handleClick: () => void;
}) {
	const { addToCart, cart } = useCart();
	const isInCart = cart.some((item) => item.id === id);
	return (
		<div
			className="w-full lg:w-full h-full rounded-lg border-[1px] border-[#E5E7E84D] relative"
			id={id}>
			<Image
				src={img}
				alt="avatar"
				width={300}
				height={160}
				className="rounded-t-lg object-cover w-full h-[170px]"
			/>
			<span className="flex flex-row justify-start gap-1 items-center text-xs bg-[#FDF2F8] px-2 py-1 text-[#354C99] w-fit absolute right-2 top-[135px] rounded-lg">
				<IconCircleFilled color="#354C99" size={6} />
				{level}
			</span>
			<div className="p-4">
				<div className="flex flex-row justify-between items-center">
					<p className="text-[14px] font-bold">{title}</p>
					<IconShare />
				</div>
				<p className="text-xs text-[#6B7280] mt-3">{description}</p>
				<hr className="border-[1px] border-[#F1F1F1] mt-4 mb-4" />
				<div className="flex flex-row justify-start items-center gap-2">
					<Image src="/users.png" alt="users" width={20} height={20} />
					<p className="text-[10px] text-[#6B7280] ">{users}</p>
				</div>
				<div className="flex flex-row justify-start items-center gap-2 mt-2">
					<Image src="/items.png" alt="users" width={20} height={20} />
					<p className="text-[10px] text-[#6B7280] ">{items}</p>
				</div>
				<div className="flex flex-row justify-start items-center gap-2 mt-2">
					<Image src="/category.png" alt="users" width={20} height={20} />
					<p className="text-[10px] text-[#6B7280] ">{category}</p>
				</div>
				<hr className="border-[1px] border-[#F1F1F1] mt-4 mb-4" />
				<div className="flex flex-row justify-between items-center">
					<p className="text-[16px] font-bold">{price}</p>
					<span className="p-[2px] w-fit bg-[#fff] rounded-lg border-[1px] border-[#DFDFDF]">
						<div
							className={`cursor-pointer p-1 rounded-lg ${
								isInCart ? "bg-[#D1FAE5]" : "bg-[#F1F3F5]"
							}`}
							onClick={() => {
								if (!isInCart) {
									addToCart({ id, title, price, img });
								}
							}}>
							<IconShoppingCart
								color={isInCart ? "#34D399" : "#6B7280"}
								size={16}
							/>
						</div>
					</span>
				</div>
			</div>
			<button
				className="bg-[#EFF1F5] p-3 text-sm text-[#1E3A8A] rounded-b-lg font-medium flex flex-row justify-center items-center w-full"
				onClick={handleClick}>
				Explore <IconCaretRightFilled color="#1E3A8A" size={14} />
			</button>
		</div>
	);
}

export default CourseCard;
