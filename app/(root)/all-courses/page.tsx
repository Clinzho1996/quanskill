"use client";

import Breadcrumb from "@/components/BreadCrumb";
import PreFooter from "@/components/PreFooter";
import Python from "@/components/Python";

function AllCourses() {
	return (
		<section>
			<Breadcrumb
				title="All Courses"
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>
			<div className="p-[6%]">
				<Python />
			</div>
			<PreFooter />
		</section>
	);
}

export default AllCourses;
