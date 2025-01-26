import { courses } from "@/constants";
import { useRouter } from "next/navigation";
import CourseCard from "./CourseCard";

function Python() {
	const router = useRouter();
	return (
		<div className="w-full">
			<hr className="border-[1px] border-[#F1F1F1] mt-[-70px] lg:mt-4 mb-6 w-full" />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{courses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id.toString()}
						img={course.img}
						title={course.title}
						description={
							course.description.length > 66
								? course.description.slice(0, 66) + "..."
								: course.description
						}
						level={course.level}
						users={course.users}
						items={course.type}
						category={course.users}
						price={course.price}
						handleClick={() => router.push(`/courses/${course.id}`)}
					/>
				))}
			</div>
		</div>
	);
}

export default Python;
