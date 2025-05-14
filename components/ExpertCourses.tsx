"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ApiResponse {
	data: Staff;
}

interface Course {
	id: string;
	title: string;
	level: string;
	cover_image: string | null;
	overview: string;
	amount: string;
	created_at: string;
	updated_at: string;
	pivot: {
		lecturer_id: string;
		course_id: string;
	};
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
	courses: Course[];
}

function ExpertCourses() {
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
		<div className="w-full bg-white mt-10">
			<hr className="border-[1px] border-[#F1F1F1] mt-10 mb-10" />

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{data?.courses?.length ? (
					data.courses.map((course) => (
						<div
							key={course.id}
							className="p-4 rounded-lg shadow-md border border-gray-200 bg-white hover:shadow-lg transition-shadow">
							<div className="flex justify-between items-start mb-2">
								<h3 className="text-lg font-semibold">{course.title}</h3>
								<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded capitalize">
									{course.level}
								</span>
							</div>
							<p className="text-sm text-gray-500 mb-2">
								Course ID: {course.id.substring(0, 4).toUpperCase()}
							</p>
							{course.cover_image && (
								<div className="mb-3">
									<img
										src={course.cover_image}
										alt={course.title}
										className="w-full h-32 object-cover rounded"
									/>
								</div>
							)}
						</div>
					))
				) : (
					<p className="text-center text-gray-500 col-span-full py-8">
						No courses assigned to this instructor.
					</p>
				)}
			</div>
		</div>
	);
}

export default ExpertCourses;
