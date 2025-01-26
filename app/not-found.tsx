import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreFooter from "@/components/PreFooter";
import Image from "next/image";

function NotFound() {
	return (
		<div>
			<Header />
			<section className="bg-white p-4">
				<div className="bg-white shadow-sm shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
					<Image
						src="/404.png"
						alt="notfound"
						width={500}
						height={500}
						className="w-full h-full lg:w-[700px] lg:h-[700px] object-contain"
					/>
				</div>
			</section>
			<PreFooter />
			<Footer />
		</div>
	);
}

export default NotFound;
