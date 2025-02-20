"use client";
import { useCart } from "@/context/CartContext";
import {
	IconCaretRightFilled,
	IconChevronDown,
	IconMail,
	IconSearch,
	IconShoppingCart,
	IconSquareRoundedX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import Modal from "./Modal";
import { Input } from "./ui/input";

function Header() {
	const [isMegaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);
	const { cart, removeFromCart } = useCart();
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<section className="relative">
			<head>
				{/* Meta Pixel Script */}
				<Script
					id="facebook-pixel"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3445030582295311');
              fbq('track', 'PageView');
            `,
					}}
				/>
				{/* NoScript Fallback */}
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=3445030582295311&ev=PageView&noscript=1"
						alt="Facebook Pixel"
					/>
				</noscript>
			</head>
			<div className="bg-white w-full  px-[6%] text-white py-0 flex flex-row justify-between items-center mb-0">
				<div className="lg:w-[15%] w-[50%] border-r-[1.2px] py-6 items-center border-[#E2E4E9] mr-[30px] pr-7  flex">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="logo"
							width={150}
							height={30}
							className="object-fit mx-auto w-[135px] h-[35px] lg:w-[150px] lg:h-[50px] object-contain"
						/>
					</Link>
				</div>
				<div className="hidden flex-row lg:w-[43%] justify-between gap-3 items-center border-[1px] border-lightblue rounded-xl lg:flex">
					<Input
						type="text"
						placeholder="What do you want to learn?"
						className="focus:outline-none focus:ring-0 text-[10px] lg:text-[12px] text-primary placeholder:text-[#6B7280] bg-transparent "
					/>
					<button className="bg-lightblue p-2 flex rounded-r-lg flex-row items-center text-primary lg:text-[12px] text-[10px] gap-1">
						<IconSearch className="text-white" />
					</button>
				</div>
				<div className="lg:w-[42%] flex-row justify-end gap-3 items-center hidden lg:flex">
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
					<Link href="/become-an-instructor">
						<button className="py-2 px-3 rounded-lg shadow-sm shadow-[#21212633] flex flex-row items-center text-primary lg:text-[12px] text-[10px] gap-1">
							Become an Instructor
							<IconCaretRightFilled
								className="w-4 h-4 text-[#6B7280]"
								color="#6B7280"
							/>
						</button>
					</Link>
					<Link href="/waitlist">
						<button className="py-2 px-3 rounded-lg bg-lightblue  flex flex-row items-center text-white lg:text-[12px] text-[10px] gap-1">
							Login / Register
							<IconCaretRightFilled
								className="w-4 h-4 text-[#6B7280]"
								color="#A9B6DD"
							/>
						</button>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<MobileNav />
				</div>
			</div>
			<div className="bg-primary px-[6%] py-4 hidden flex-row justify-between items-center lg:flex">
				<div className="flex flex-row justify-start gap-10">
					<div className="flex flex-row justify-start gap-2 pr-10 border-r-[1px] border-[#E5E7EB4D]">
						<Image
							src="/menu.png"
							alt="apple"
							width={16}
							height={16}
							className="w-[16] h-[16] object-fit items-center my-auto"
						/>
						<Link
							href="/all-courses"
							className="text-white text-[12px] font-normal lg:text-sm">
							All Courses
						</Link>
					</div>
					<div className="flex flex-row gap-6 justify-start">
						<Link
							href="/about-us"
							className="text-white text-[12px] font-normal lg:text-sm">
							About Us
						</Link>
						<Link
							href="/"
							className="text-white text-[12px] font-normal lg:text-sm">
							Community
						</Link>
						<Link
							href="/experts"
							className="text-white text-[12px] font-normal lg:text-sm">
							Experts
						</Link>
						<Link
							href="/"
							className="text-white text-[12px] font-normal lg:text-sm">
							Resources
						</Link>
						<div
							className="relative group"
							onMouseEnter={() => setMegaMenuOpen(true)}
							onMouseLeave={() => setMegaMenuOpen(false)}>
							<Link
								href="/"
								className="text-white text-[12px] font-normal lg:text-sm flex flex-row justify-start items-center gap-2">
								Edtech Partnership <IconChevronDown className="w-4 h-4" />
							</Link>
							{isMegaMenuOpen && (
								<div className="absolute mega-menu left-0 top-full w-full">
									<div className="h-4 bg-transparent"></div>
									<MegaMenu />
								</div>
							)}
						</div>
						<Link
							href="/contact-us"
							className="text-white text-[12px] font-normal lg:text-sm">
							Contact Us
						</Link>
					</div>
				</div>
				<div className="flex flex-row justify-end gap-5">
					<div className="flex flex-row justify-start gap-1">
						<IconMail className="mr-1 text-secondary w-5 h-5" />
						<Link
							href="/"
							className="text-white text-[12px] font-normal lg:text-sm">
							info@quanskill.com
						</Link>
					</div>
				</div>
			</div>
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
}

export default Header;
