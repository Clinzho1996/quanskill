"use client";

import AllCoursesComp from "@/components/AllCoursesComp";
import Breadcrumb from "@/components/BreadCrumb";
import PreFooter from "@/components/PreFooter";

function AllCourses() {
	return (
		<section>
			<Breadcrumb
				title="All Courses"
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>
			<div className="p-[6%]">
				<AllCoursesComp />
			</div>
			<PreFooter />
		</section>
	);
}

export default AllCourses;
