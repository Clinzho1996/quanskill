"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { SkeletonCard } from "./BlogSkeleton";
import SecondaryButton from "./SecondaryButton";

interface Post {
	id: number;
	post_title: string;
	post_body: string;
	post_image: string;
	created_at: string;
}

interface ApiResponse {
	data: Post[];
}
function Blog() {
	const [post, setPost] = React.useState<Post[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const fetchPosts = async () => {
		try {
			// Fetch posts with appropriate typing
			const response = await axios.get<ApiResponse>(
				"https://api.kuditrak.ng/api/v1/post",
				{
					headers: {
						Accept: "application/json",
						redirect: "follow",
					},
				}
			);

			setPost(response.data.data); // Set post data
			setIsLoading(false); // Set loading to false
		} catch (error: unknown) {
			// Ensure error is typed correctly
			if (axios.isAxiosError(error)) {
				console.log(
					"Error fetching posts:",
					error.response?.data || error.message
				);
			} else {
				console.log("Unexpected error:", error);
			}
		}
	};

	// Inside your useEffect
	useEffect(() => {
		fetchPosts();
	}, []);

	const formatDate = (rawDate: string) => {
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		}; // Correct types
		const parsedDate = new Date(rawDate); // Ensure the date is parsed correctly
		return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
	};
	return (
		<section className="bg-primary p-4">
			<div className="bg-white px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg ">
				<SecondaryButton title="BLOG" img="/icon.png" />
				<h2 className="text-[28px] lg:text-[40px] font-extrabold font-inter mt-5 text-primary leading-[32px] sm:leading-[50px]">
					<span className="text-[#0D142080]">Say Goodbye to living </span>
					Paycheck to Paycheck
				</h2>
				<p className="text-[#0D1420B2] mt-5 text-sm">
					Introducing Kuditrak - Your Personal Finance Companion
				</p>
				<div className="mt-10 flex flex-col lg:flex-row justify-between gap-6 items-center align-middle">
					{isLoading ? (
						<div className="w-full flex flex-row justify-center items-center gap-3">
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</div>
					) : (
						<>
							{post.slice(0, 3).map((item: Post, index) => (
								<BlogCard
									key={index}
									id={item.id}
									img={item.post_image}
									title={item.post_title}
									description={item.post_body.slice(0, 90).concat("...")}
									date={formatDate(item.created_at)}
								/>
							))}
						</>
					)}
				</div>

				{/* cta */}
				<div className="mt-8 flex flex-row justify-center mb-6">
					<Link href="/blog">
						<p className="border border-secondary text-primary text-sm font-inter p-3 rounded-md hover:bg-secondary hover:text-primary hover:border-primary ">
							News & Insights +
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Blog;
