"use client";

import { SkeletonCard } from "@/components/BlogSkeleton";
import Breadcrumb from "@/components/BreadCrumb";
import axios from "axios";
import parse from "html-react-parser";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
	id: number;
	post_title: string;
	post_body: string;
	post_image: string;
	created_at: string;
}

interface ApiResponse {
	data: Post; // Adjust to match your API structure
}

export default function BlogContent() {
	const { id } = useParams();
	const [post, setPost] = useState<Post | null>(null); // Use a single post
	const [isLoading, setIsLoading] = useState(true);

	// Fetch post details by ID
	const fetchPost = async () => {
		try {
			const response = await axios.get<ApiResponse>(
				`https://quanskill.kuditrak.ng/api/v1/post/${id}`,
				{
					headers: {
						Accept: "application/json",
						redirect: "follow",
					},
				}
			);

			console.log("data", response?.data?.data);
			setPost(response?.data?.data); // Set post data
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
		fetchPost();
	}, [id]);

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
		<section>
			{isLoading ? (
				<div className="w-full flex flex-row justify-center items-center gap-3 p-[6%]">
					<SkeletonCard />
					<SkeletonCard />
					<SkeletonCard />
				</div>
			) : post ? (
				<div>
					<Breadcrumb title="Blog / insight" description={post.post_title} />
					<div className="w-full lg:w-[70%] p-[6%] flex flex-col gap-4 justify-start">
						<div className="flex flex-row justify-start items-center gap-3">
							<div>
								<Image src="/favicon.png" alt="avatar" width={50} height={50} />
							</div>
							<div>
								<p>Quanskill Management</p>
								<p className="text-[#86898F]">
									2 mins read • {formatDate(post.created_at)}
								</p>
							</div>
						</div>
						<div className="flex flex-row justify-start items-center mt-3">
							<Image
								src={post.post_image}
								alt={post.post_title}
								width={550}
								height={200}
								className="w-full h-[310px] lg:h-[475px] rounded-sm object-cover"
							/>
						</div>
						<div className="text-primary font-inter font-normal flex flex-col gap-3 mt-3">
							{parse(post.post_body)}
						</div>
					</div>
				</div>
			) : (
				<p>Post not found.</p>
			)}
		</section>
	);
}
