function Breadcrumb({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="breadcrumb p-[6%] flex-col flex justify-center items-center gap-4">
			<h2 className="font-inter text-[32px] lg:text-[40px] leading-[38px] lg:leading-[52px] font-extrabold w-full lg:w-[60%] text-center text-white">
				{title}{" "}
			</h2>

			<p className=" text-white text-xs lg:text-sm text-center font-inter w-full lg:w-[30%] mx-auto">
				{description}
			</p>
		</div>
	);
}

export default Breadcrumb;
