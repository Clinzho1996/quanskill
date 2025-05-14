"use client";

import axios from "axios";
import Image from "next/image";
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

function ExpertBiography() {
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
			<div className="flex flex-col sm:flex-row gap-6 p-4 rounded-lg shadow-lg border-[3px] border-white bg-[#F1F1F1]">
				<div className="p-2 border-[5px] border-white bg-[#F1F1F1] rounded-lg">
					{data?.pic && (
						<Image
							src={data.pic}
							alt={`${data.first_name} ${data.last_name}`}
							width={250}
							height={300}
							className="w-[250px] h-[300px]  rounded-xl object-cover border-[3px] border-white"
						/>
					)}
				</div>
				<div className="flex flex-col sm:flex-row justify-start  items-center gap-10">
					<div className="flex flex-col gap-5">
						<p className="flex flex-col font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Name:
							</span>{" "}
							{data?.first_name} {data?.last_name}
						</p>
						<p className="flex flex-col gap-1 font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Email Address:
							</span>{" "}
							{data?.email}
						</p>
						<p className="flex flex-col gap-1 font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Phone Number:
							</span>{" "}
							{data?.phone}
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<p className="flex flex-col gap-1 font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Gender:
							</span>{" "}
							{data?.gender}
						</p>
						<p className="flex flex-col gap-1 font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Date Added:
							</span>{" "}
							{new Date(data?.created_at ?? "").toLocaleDateString()}
						</p>
						<p className="flex flex-col gap-1 font-semibold text-primary">
							<span className="font-normal text-[#5E5F6E] font-inter">
								Status:
							</span>{" "}
							<span className="text-green-600 font-semibold">
								{data?.status ? "Verified" : "Not Verified"}
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="mt-6 border-t pt-4 space-y-3 p-4 rounded-lg shadow-lg border-[3px] border-white bg-[#F1F1F1]">
				<p className="flex flex-col font-semibold text-primary">
					<span className="font-normal text-[#5E5F6E] font-inter">
						Area of Specialization:
					</span>{" "}
					{data?.specialization || "N/A"}
				</p>
				<p className="flex flex-col font-semibold text-primary">
					<span className="font-normal text-[#5E5F6E] font-inter">Skills:</span>{" "}
					{data?.skills?.map((skill) => `#${skill}`).join(" | ") || "N/A"}
				</p>
				<p className="flex flex-col font-semibold text-primary">
					<span className="font-normal text-[#5E5F6E] font-inter">
						Institution of Work:
					</span>{" "}
					{data?.institution_of_work || "N/A"}
				</p>
				<p className="flex flex-col font-semibold text-primary">
					<span className="font-normal text-[#5E5F6E] font-inter">
						Department at Institution:
					</span>{" "}
					{data?.department || "N/A"}
				</p>
				<p className="flex flex-col font-semibold text-primary">
					<span className="font-normal text-[#5E5F6E] font-inter">
						Academic Qualification:
					</span>{" "}
					{data?.academic_qualification || "N/A"}
				</p>
			</div>

			<div className="mt-6 border-t pt-4 p-4 rounded-lg shadow-lg border-[3px] border-white bg-[#F1F1F1]">
				<h3 className="text-lg font-semibold mb-2">Short Bio</h3>
				<p className="text-gray-700 leading-relaxed">
					{data?.short_bio || "N/A"}
				</p>
			</div>
		</div>
	);
}

export default ExpertBiography;
