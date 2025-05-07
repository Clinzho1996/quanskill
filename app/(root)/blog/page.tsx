"use client";
import BlogCard from "@/components/BlogCard";
import { SkeletonCard } from "@/components/BlogSkeleton";
import Breadcrumb from "@/components/BreadCrumb";
import SecondaryButton from "@/components/SecondaryButton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

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
				"https://api.quanskill.com/api/v1/post",
				{
					headers: {
						Accept: "application/json",
						redirect: "follow",
					},
				}
			);

			console.log("data", response.data.data);
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
		<>
			<Breadcrumb title="Blog" description="The ins & outs of Quanskill" />
			<section className="bg-primary p-4">
				<div className="bg-white px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg ">
					<div className="flex flex-col lg:flex-row w-full justify-between items-center gap-5 bg-ash p-3 rounded-md">
						{isLoading ? (
							<div className="w-full flex flex-row justify-center items-center gap-3">
								<SkeletonCard />
								<SkeletonCard />
								<SkeletonCard />
							</div>
						) : (
							<>
								{post.slice(0, 1).map((item: Post, index) => (
									<div
										key={index}
										className="flex flex-col lg:flex-row items-center gap-5">
										<div className="w-full lg:w-[50%]">
											<Link href={`/blog/${item.id}`}>
												<Image
													src={item.post_image}
													width={600}
													height={300}
													alt="blog"
													className="object-cover rounded-lg w-[100%] lg:w-[600px] lg:h-[300px] h-[150px]"
												/>
											</Link>
										</div>
										<div className="w-full lg:w-[50%]">
											<SecondaryButton title="articles" img="/icon.png" />
											<h2 className="text-[18px] lg:text-[36px] leading-[28px] lg:leading-[48px] font-extrabold font-inter text-primary mt-2">
												{item.post_title}
											</h2>
											<p
												className="text-[#0D1420B2] mt-2 mb-8 lg:text-sm text-xs font-inter"
												dangerouslySetInnerHTML={{
													__html: item.post_body.slice(0, 150).concat("..."),
												}}
											/>
											<Link href={`/blog/${item.id}`}>
												<button className="text-center w-full text-xs lg:text-sm text-primary mt-4 border border-[#0000001A] p-1 rounded-lg">
													Read article
												</button>
											</Link>
										</div>
									</div>
								))}
							</>
						)}
					</div>{" "}
					<div className="mt-10 flex flex-col lg:flex-row justify-start gap-6 items-center align-middle flex-wrap">
						{isLoading ? (
							<div className="w-full flex flex-row justify-center items-center gap-3">
								<SkeletonCard />
								<SkeletonCard />
								<SkeletonCard />
							</div>
						) : (
							<>
								{post.slice(1, 9).map((item: Post, index) => (
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
				</div>
			</section>
		</>
	);
}

export default Blog;
