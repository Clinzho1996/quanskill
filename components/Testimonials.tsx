"use client";
import { TestimonialsData } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import TestimonialCard from "./TestimonialCard";
import { Carousel, CarouselContent } from "./ui/carousel";

function Testimonials() {
	return (
		<section className="bg-white">
			<div className="prefooter px-[6%] py-[15%] lg:px-20 lg:py-16 rounded-lg">
				<div className="flex flex-col justify-center items-center align-middle gap-6 mt-10">
					<SecondaryButton title="testimonial" img="/icon.png" />
					<h2 className="text-[22px] lg:text-[28px] font-extrabold font-inter text-primary text-center leading-[32px] sm:leading-[60px]">
						Why people choose Quanskill for their career
					</h2>
					<Image
						src="/vec.png"
						alt="logo"
						width={100}
						height={30}
						className="flex flex-row  justify-center ml-[45%] mt-[-10px] lg:mt-[-30px] items-center object-contain"
					/>
				</div>

				<Carousel
					className="w-full mt-4 lg:mt-10"
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}>
					<CarouselContent>
						{TestimonialsData.map((item, index) => (
							<TestimonialCard
								key={index}
								img={item.img}
								name={item.name}
								title={item.title}
								description={item.description}
							/>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
}

export default Testimonials;
