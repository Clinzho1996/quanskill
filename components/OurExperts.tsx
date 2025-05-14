"use client";

import axios from "axios";
import React, { useEffect } from "react";
import ExpertCard from "./ExpertCard";

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

function OurExperts() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [userData, setUserData] = React.useState<Staff[]>([]);

	const fetchUserData = async () => {
		try {
			setIsLoading(true);

			const response = await axios.get<ApiResponse>(
				"https://api.quanskill.com/api/v1/lecturer",
				{
					headers: {
						Accept: "application/json",
					},
				}
			);

			setUserData(response.data.data);
		} catch (error) {
			console.error("Error fetching user data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	if (isLoading) {
		return <div className="flex justify-center py-8">Loading...</div>;
	}

	return (
		<div className="container mx-auto px-0 py-8 mt-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{userData.map((expert) => (
					<ExpertCard
						key={expert.id}
						img={expert.pic || "/default-profile.png"}
						name={`${expert.first_name} ${expert.last_name}`}
						title={expert.institution_of_work || "Expert"}
						handleClick={() => {
							window.location.href = `/experts/${expert.id}`;
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default OurExperts;
