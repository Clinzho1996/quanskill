"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import from Radix
import {
	IconCaretRightFilled,
	IconMenu4,
	IconShoppingCart,
	IconSquareRoundedX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "./Modal";

const MobileNav = () => {
	const pathname = usePathname();

	const { cart, removeFromCart } = useCart();
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<section className="w-full max-w-[264px] flex flex-row justify-between gap-6">
			<button
				className="p-[3px] rounded-lg shadow-sm shadow-[#21212633] flex flex-row items-center text-primary lg:text-[12px] text-[10px] gap-1"
				onClick={openModal}>
				<span className="p-[6px] w-fit bg-[#F1F3F5] rounded-lg">
					{" "}
					<IconShoppingCart className="w-4 h-4" color="#6B7280" />
				</span>
				<span className="text-white bg-secondary rounded-full text-[10px] w-3 h-3 items-center align-middle ml-[-16px] mt-[16px]">
					{cart.length}
				</span>
			</button>

			<Sheet>
				<SheetTrigger>
					<IconMenu4 color="#6B7280" className="w-8 h-8" />
				</SheetTrigger>
				<SheetContent side="left" className="border-none bg-primary">
					{/* Visually hidden DialogTitle for accessibility */}
					<VisuallyHidden>
						<DialogTitle>Navigation Menu</DialogTitle>
					</VisuallyHidden>

					<Link
						href="/"
						className="cursor-pointer flex items-center gap-1 px-4">
						<Image
							src="/logowhite.png"
							alt="logo"
							width={115}
							height={20}
							className="object-fit lg:w-[115px] w-full/2 h-[50px] lg:h-[20px] object-contain"
						/>
					</Link>
					<div className=" bg-primary">
						<SheetClose asChild className="button">
							<div>
								<nav className="flex h-full flex-col gap-3 pt-16 text-white">
									{NavLinks.map((item) => {
										const isActive =
											pathname === item.route ||
											pathname.startsWith(`${item.route}/`);

										return (
											<SheetClose
												asChild
												key={item.route}
												className="text-white">
												<Link
													href={item.route}
													key={item.name}
													className={cn("sidebar-link", {
														"bg-transparent": isActive,
													})}>
													<p
														className={cn("text-gray-400 text-sm", {
															"text-primary-3 font-bold": isActive,
														})}>
														{item.name}
													</p>
												</Link>
											</SheetClose>
										);
									})}
								</nav>
								<div className="flex flex-col justify-end gap-3 mt-5 p-3 border border-gray-200 rounded-lg w-[210px]">
									<button
										className="py-2 px-3 rounded-lg bg-white shadow-sm shadow-[#21212633] flex flex-row items-center text-primary lg:text-[12px] text-[10px] gap-1 justify-between"
										onClick={() =>
											(window.location.href = "/become-an-instructor")
										}>
										Become an Instructor
										<IconCaretRightFilled
											className="w-4 h-4 text-[#6B7280]"
											color="#6B7280"
										/>
									</button>
									<button
										className="py-2 px-3 rounded-lg bg-lightblue  flex flex-row items-center text-white lg:text-[12px] text-[10px] gap-1 justify-between"
										onClick={() =>
											(window.location.href = "https://portal.quanskill.com/")
										}>
										Login / Register
										<IconCaretRightFilled
											className="w-4 h-4 text-[#6B7280]"
											color="#A9B6DD"
										/>
									</button>
								</div>
							</div>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className="px-2 py-4 w-full lg:w-[370px]">
					<h2 className="text-lg font-semibold mb-4 text-primary">Your Cart</h2>
					<div className="space-y-4">
						{cart.length > 0 ? (
							cart.map((item) => (
								<div
									key={item.id}
									className="flex flex-row items-center justify-between gap-4 border-b pb-3">
									<div className="flex flex-row justify-start items-center gap-3">
										<Image
											src={item.img} // Replace with actual image path
											alt={item.title}
											width={100}
											height={150}
											className="rounded-lg w-[80px] h-[80px] object-cover"
										/>
										<div>
											<h3 className="font-medium text-xs lg:text-sm text-primary">
												{item.title}
											</h3>
											<p className="text-gray-500 text-xs lg:text-sm py-1 px-2 border border-ash w-fit rounded-full mt-2">
												{item.price}
											</p>
										</div>
									</div>
									<button
										className="text-red-500 hover:text-red-700"
										onClick={() => removeFromCart(item.id)}
										aria-label="Remove item">
										<IconSquareRoundedX color="red" />
									</button>
								</div>
							))
						) : (
							<p>Your cart is empty.</p>
						)}
					</div>
					<div className="mt-6 flex justify-start gap-2">
						<button
							className="py-2 px-4 border border-ash bg-transparent text-xs lg:text-sm text-primary rounded-lg"
							onClick={() => {
								closeModal();
								// Navigate to Cart Page
							}}>
							View All Cart ({cart.length})
						</button>
						<button
							className="py-2 px-4 bg-lightblue text-white text-xs lg:text-sm rounded-lg shadow-sm shadow-primary"
							onClick={() => {
								closeModal();
								// Navigate to Checkout Page
							}}>
							Checkout
						</button>
					</div>
				</div>
			</Modal>
		</section>
	);
};

export default MobileNav;
