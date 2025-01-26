"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Learning from "./Learning";
import SecondaryButton from "./SecondaryButton";
import System from "./System";

function Learn() {
	return (
		<section className="bg-white p-4">
			<div className="bg-[#F8F8F8] px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg">
				<div className="flex flex-col justify-center items-center align-middle gap-2">
					<SecondaryButton
						title="learning environment & community"
						img="/icon.png"
						className="bg-white"
					/>
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						An Ecosystem for Your Success
					</h2>
					<Image
						src="/line.png"
						alt="logo"
						width={130}
						height={30}
						className="flex flex-row  justify-center ml-[30%] mt-[-10px] lg:mt-[-20px] items-center object-contain"
					/>
				</div>
				<div className="mt-6 flex flex-row justify-center">
					<Tabs defaultValue="learning">
						<TabsList className="flex flex-row justify-center bg-[#EFF1F5] mx-auto w-fit gap-3">
							<TabsTrigger value="learning">Interactive Learning</TabsTrigger> |
							<TabsTrigger value="support">Support System</TabsTrigger>
						</TabsList>
						<TabsContent value="learning">
							<Learning />
						</TabsContent>
						<TabsContent value="support">
							<System />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</section>
	);
}

export default Learn;
