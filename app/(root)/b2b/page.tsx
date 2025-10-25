import Faq from "@/components/Faq";
import HeroB2B from "@/components/HeroB2B";
import PreFooter from "@/components/PreFooter";
import Testimonials from "@/components/Testimonials";
import WhoWeAreSolutions from "@/components/WhoWeAreSolutions";
import WorkforceCustomIntegration from "@/components/WorkForce";

function B2B() {
	return (
		<div className="min-h-screen">
			<HeroB2B />
			<WhoWeAreSolutions />
			<WorkforceCustomIntegration />
			{/* <WhyPartner />
			<RegionalReach /> */}
			<Testimonials />
			<Faq />
			<PreFooter />
		</div>
	);
}

export default B2B;
