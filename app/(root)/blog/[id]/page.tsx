"use client";

import { SkeletonCard } from "@/components/BlogSkeleton";
import Breadcrumb from "@/components/BreadCrumb";
import axios from "axios";
import parse, { DOMNode, domToReact, Element } from "html-react-parser";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Highlight, Prism } from "prism-react-renderer";
import { useEffect, useState } from "react";

interface Post {
	id: number;
	post_title: string;
	post_body: string;
	post_image: string;
	created_at: string;
}

const defaultHighlightProps = {
	Prism,
	theme: undefined,
	language: "javascript",
	code: "",
	children: () => null,
};

interface ApiResponse {
	data: Post;
}

// Custom parser to handle code blocks
const parseWithCode = (html: string) => {
	return parse(html, {
		replace: (domNode: DOMNode) => {
			if (isElement(domNode) && domNode.name === "pre") {
				const codeNode = (domNode.children as unknown as DOMNode[]).find(
					isElementWithName("code")
				);

				if (codeNode) {
					const code =
						codeNode.children[0]?.type === "text"
							? codeNode.children[0].data
							: "";
					const className = codeNode.attribs?.class || "";
					const languageMatch = className.match(/language-(\w+)/);
					const language = languageMatch ? languageMatch[1] : "javascript";

					return (
						<div className="code-block my-4">
							<Highlight
								{...defaultHighlightProps}
								code={code}
								language={language}>
								{(props: {
									className: string;
									style: React.CSSProperties;
									tokens: any[][];
									getLineProps: (input: any) => any;
									getTokenProps: (input: any) => any;
								}) => (
									<pre
										className={props.className}
										style={{
											...props.style,
											padding: "20px",
											borderRadius: "8px",
										}}>
										{props.tokens.map((line, i) => (
											<div key={i} {...props.getLineProps({ line, key: i })}>
												{line.map((token, key) => (
													<span
														key={key}
														{...props.getTokenProps({ token, key })}
													/>
												))}
											</div>
										))}
									</pre>
								)}
							</Highlight>
						</div>
					);
				}
			}

			// Handle headings
			if (isElement(domNode)) {
				switch (domNode.name) {
					case "h1":
						return (
							<h1 className="text-3xl font-bold my-4">
								{domToReact(domNode.children as unknown as DOMNode[])}
							</h1>
						);
					case "h2":
						return (
							<h2 className="text-2xl font-bold my-4">
								{domToReact(domNode.children as unknown as DOMNode[])}
							</h2>
						);
					case "h3":
						return (
							<h3 className="text-xl font-bold my-3">
								{domToReact(domNode.children as unknown as DOMNode[])}
							</h3>
						);
					default:
						return undefined;
				}
			}
			return undefined;
		},
	});
};

// Type guards for DOM nodes
function isElement(node: DOMNode): node is Element {
	return "type" in node && node.type === "tag";
}

function isElementWithName(name: string) {
	return (node: DOMNode): node is Element =>
		isElement(node) && node.name === name;
}

export default function BlogContent() {
	const { id } = useParams();
	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPost = async () => {
		try {
			const response = await axios.get<ApiResponse>(
				`https://api.quanskill.com/api/v1/post/${id}`,
				{
					headers: {
						Accept: "application/json",
						redirect: "follow",
					},
				}
			);
			setPost(response?.data?.data);
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
		};
		const parsedDate = new Date(rawDate);
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
								<Image src="/icon.png" alt="avatar" width={50} height={50} />
							</div>
							<div>
								<p>Quanskill Management</p>
								<p className="text-[#86898F]">
									2 mins read • {formatDate(post.created_at)}
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
						<div className="blog-content text-primary font-inter font-normal flex flex-col gap-3 mt-3">
							{parseWithCode(post.post_body)}
						</div>
					</div>
				</div>
			) : (
				<p>Post not found.</p>
			)}
		</section>
	);
}
