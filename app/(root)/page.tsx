import About from "@/components/About";
import Experts from "@/components/Experts";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Learn from "@/components/Learn";
import PreFooter from "@/components/PreFooter";
import Program from "@/components/Program";
import Target from "@/components/Target";
import Testimonials from "@/components/Testimonials";

function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Program />
			<Target />
			<Learn />
			<Experts />
			<Testimonials />
			<Faq />
			<PreFooter />
		</div>
	);
}

export default Home;
