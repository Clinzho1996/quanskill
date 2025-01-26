"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";
import Python from "./Python";
import SecondaryButton from "./SecondaryButton";

function Program() {
	return (
		<section className="bg-white p-4">
			<div className="bg-[#F8F8F8] px-[6%] py-[15%] lg:px-5 lg:py-16 rounded-lg">
				<div className="flex flex-row justify-between items-end">
					<div className="flex flex-col justify-center items-center align-middle gap-2">
						<SecondaryButton
							title="programs & key modules"
							img="/icon.png"
							className="bg-white"
						/>
						<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
							Practise based learning
						</h2>
						<Image
							src="/vec.png"
							alt="logo"
							width={75}
							height={35}
							className="flex flex-row  justify-center ml-[48%] mt-[0px] lg:mt-[-15px] items-center object-contain"
						/>
					</div>
					<button className="py-2 px-3 bg-[#FFFFFF] rounded-lg border-[1px] border-[#1E3A8A] flex flex-row font-semibold items-center text-[#1E3A8A] lg:text-[12px] text-[10px] gap-1 w-fit mt-5">
						See All Courses
						<IconCaretRightFilled
							className="w-4 h-4 text-[#6B7280]"
							color="#6B7280"
						/>
					</button>
				</div>
				<div className="mt-10 flex flex-row w-full border-[1px] border-[#D1D5DB] py-4 rounded-lg">
					<Tabs defaultValue="python">
						<TabsList className="flex flex-row h-fit flex-wrap justify-start bg-[#EFF1F5] w-fit  ml-4 mr-4 gap-3">
							<TabsTrigger value="python">Python </TabsTrigger> |
							<TabsTrigger value="data-science">Data Science </TabsTrigger> |
							<TabsTrigger value="machine-learning">
								{" "}
								Machine Learning
							</TabsTrigger>{" "}
							|<TabsTrigger value="deep-learning">Deep Learning</TabsTrigger> |
							<TabsTrigger value="natural-language-processing">
								Natural Language Processing
							</TabsTrigger>{" "}
							|<TabsTrigger value="llms-and-genai">LLMs and GenAI</TabsTrigger>
						</TabsList>
						<div className="w-full px-4 mt-[100px] lg:mt-0">
							<TabsContent value="python">
								<Python />
							</TabsContent>
							<TabsContent value="data-science">
								<Python />
							</TabsContent>
							<TabsContent value="machine-learning">Coming soon</TabsContent>
							<TabsContent value="deep-learning">Coming soon</TabsContent>
							<TabsContent value="natural-language-processing">
								Coming soon
							</TabsContent>
							<TabsContent value="llms-and-genai">Coming soon</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</section>
	);
}

export default Program;
