"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ApiResponse {
	data: Staff;
}

interface WorkExperience {
	id: string;
	name: string;
	role: string;
	description: string;
	created_at: string;
	updated_at: string;
	lecturer_id: string;
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
	works: WorkExperience[];
}

function ExpertWork() {
	const { id } = useParams();
	const [data, setData] = useState<Staff | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchExpert = async () => {
		setIsLoading(true);
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

			setData(response?.data?.data || null);
			console.log("Image URL in ExpertBiography:", data?.pic);
			setIsLoading(false);
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				console.log(
					"Error fetching post:",
					error.response?.data || error.message
				);
			} else {
				console.log("Unexpected error:", error);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchExpert();
	}, [id]);

	if (isLoading) {
		return <div className="flex justify-center py-8">Loading...</div>;
	}
	return (
		<div className="w-full bg-white  mt-10">
			<hr className="border-[1px] border-[#F1F1F1] mt-10 mb-10" />

			{data?.works?.length ? (
				data.works.map((work) => (
					<div className="mt-6 border-t pt-4 space-y-3 p-4 rounded-lg shadow-lg border-[3px] border-white bg-[#F1F1F1]">
						<p className="flex flex-col font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Title:
							</span>{" "}
							{work?.name || "N/A"}
						</p>

						<p className="flex flex-col font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Role:
							</span>{" "}
							{work?.role || "N/A"}
						</p>
						<p className="flex flex-col font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Description:
							</span>{" "}
							{work?.description || "N/A"}
						</p>
					</div>
				))
			) : (
				<p className="text-center text-gray-500">
					No work information available.
				</p>
			)}
		</div>
	);
}

export default ExpertWork;
