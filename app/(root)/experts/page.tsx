import Breadcrumb from "@/components/BreadCrumb";
import ExpertAreas from "@/components/ExpertAreas";
import ExpertComp from "@/components/ExpertComp";
import ExpertInfo from "@/components/ExpertInfo";
import ExpertIntro from "@/components/ExpertIntro";
import PreFooter from "@/components/PreFooter";

function Experts() {
	return (
		<section>
			<Breadcrumb
				title="Experts"
				description="Learn from industry leaders, master essential skills, and build your career with confidence."
			/>
			<ExpertIntro />
			<ExpertInfo />
			<ExpertComp />
			<ExpertAreas />
			<PreFooter />
		</section>
	);
}

export default Experts;
