"use client";

import Breadcrumb from "@/components/BreadCrumb";
import ExpertBiography from "@/components/ExpertBiography";
import ExpertWork from "@/components/ExpertWork";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ApiResponse {
	data: Staff;
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
			setData(response.data.data || null); // Set post data to the first staff or null
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

	if (isLoading) {
		return <div className="flex justify-center py-8">Loading...</div>;
	}

	return (
		<section>
			<Breadcrumb
				title={data?.first_name + " " + data?.last_name}
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>

			<section className="bg-white p-4">
				<div className="bg-[#fff] px-[6%] py-[12%] shadow-md shadow-gray-200 lg:px-20 lg:py-16 rounded-xl mt-[-30px] lg:mt-[-60px]">
					<div className="flex flex-row justify-center w-full">
						<Tabs defaultValue="bio" className="w-full">
							<TabsList className="flex flex-row justify-center bg-[#EFF1F5] mx-auto w-fit gap-3 flex-wrap h-fit">
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
