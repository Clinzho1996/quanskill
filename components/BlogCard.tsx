import Image from "next/image";
import Link from "next/link";

function BlogCard({
	id,
	img,
	title,
	description,
	date,
}: {
	id: number;
	img: string;
	title: string;
	description: string;
	date: string;
}) {
	return (
		<div className="bg-ash p-3 rounded-md w-full lg:w-[31%]" key={id}>
			<Link href={`/blog/${id}`}>
				<Image
					src={img}
					alt="blog"
					width={450}
					height={200}
					className="rounded-sm w-[100%] h-[200px] object-cover"
				/>
			</Link>
			<div className="flex flex-row justify-between items-center mt-3">
				<p className="text-[#86898F] lg:text-[12px] text-[10px] uppercase font-inter">
					BLOG / INSIGHTS
				</p>
				<p className="text-[#86898F] lg:text-[12px] text-[10px] uppercase font-inter">
					{date}
				</p>
			</div>
			<Link href={`/blog/${id}`}>
				<h2 className="mt-4 text-primary lg:text-[22px] leading-[24px] lg:leading-[32px] text-sm font-semibold font-inter">
					{title}
				</h2>
			</Link>
			<p
				className="text-[#0D1420B2] mt-2 mb-8 lg:text-sm text-xs font-inter"
				dangerouslySetInnerHTML={{ __html: description }}
			/>
		</div>
	);
}

export default BlogCard;
