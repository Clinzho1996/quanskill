"use client";

import Breadcrumb from "@/components/BreadCrumb";
import ExpertBiography from "@/components/ExpertBiography";
import ExpertWork from "@/components/ExpertWork";
import SecondaryButton from "@/components/SecondaryButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ApiResponse {
	data: Staff[];
}

export interface Staff {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	pic: string | null;
	gender: string;
	status: boolean;
	created_at: string;
	updated_at: string;
	specialization: string | null;
	skills: string[] | null;
	institution_of_work: string | null;
	department: string | null;
	academic_qualification: string | null;
	short_bio: string | null;
}

function ExpertDetails() {
	const { id } = useParams();
	const [data, setData] = useState<Staff | null>(null); // Use a single post
	const [isLoading, setIsLoading] = useState(true);

	// Fetch post details by ID
	const fetchExpert = async () => {
		try {
			const response = await axios.get<ApiResponse>(
				`https://api.quanskill.com/api/v1/lecturer/${id}`,
				{
					headers: {
						Accept: "application/json",
						redirect: "follow",
					},
				}
			);

			console.log("data", response?.data?.data);
			setData(response.data.data[0] || null); // Set post data to the first staff or null
			setIsLoading(false); // Set loading to false
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(
					"Error fetching post:",
					error.response?.data || error.message
				);
			} else {
				console.log("Unexpected error:", error);
			}
		}
	};

	useEffect(() => {
		fetchExpert();
	}, [id]);

	return (
		<section>
			<Breadcrumb
				title="Experts"
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>

			<section className="bg-white p-4">
				<div className="bg-[#fff] px-[6%] py-[12%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl mt-[-30px] lg:mt-[-60px]">
					<div className="flex flex-col lg:flex-row justify-between items-end align-bottom w-full">
						<div className="w-full lg:w-[50%]">
							<Link href="/experts">
								<SecondaryButton
									img="/chevron-right.png"
									className="bg-white"
									title="Back to previous page"
								/>
							</Link>
							<h2 className="text-primary text-[28px] pr-0 lg:pr-[18%] font-inter font-bold mt-4">
								Learn from Industry Veterans Who Shape AI&apos;s Future
							</h2>
						</div>
						<div className="w-full lg:w-[50%]">
							<p className="text-[#6B7280] text-[14px]">
								At Quanskill, you&apos;ll learn directly from professionals who
								don&apos;t just teach AI and Data Science—they live it. Our
								instructors bring together decades of experience from leading
								tech companies, research institutions, and successful AI
								implementations.
							</p>
						</div>
					</div>
					<div className="mt-10 flex flex-row justify-center w-full">
						<Tabs defaultValue="bio" className="w-full">
							<TabsList className="flex flex-row justify-center bg-[#EFF1F5] mx-auto w-fit gap-3">
								<TabsTrigger value="bio">Biography</TabsTrigger> |
								<TabsTrigger value="work">Work and Project</TabsTrigger> |
								<TabsTrigger value="courses">Assigned Courses</TabsTrigger>
							</TabsList>
							<TabsContent value="bio" className="max-w-full">
								<ExpertBiography />
							</TabsContent>
							<TabsContent value="work">
								<ExpertWork />
							</TabsContent>
							<TabsContent value="courses">{/* <System /> */}</TabsContent>
						</Tabs>
					</div>
				</div>
			</section>
		</section>
	);
}

export default ExpertDetails;
