import Image from "next/image";
import MegaCard from "./MegaCard";

const MegaMenu: React.FC = () => {
	return (
		<div className="absolute left-[-450px] w-[1100px] bg-[#EFEFF4] shadow-lg border-[6px] border-white z-50 p-5 rounded-lg mt-0">
			<div className="w-full flex flex-row justify-between items-start">
				<div className="flex flex-row flex-wrap items-start gap-3 w-[62%]">
					<MegaCard
						img="/uni.png"
						route="/b2b/university"
						title="University"
						description="Learn from industry leaders and master essential skills"
					/>
					<MegaCard
						img="/gov.png"
						route="/b2b/government"
						title="Government"
						description="Learn from industry leaders and master essential skills"
					/>
					<MegaCard
						img="/cor.png"
						route="/b2b/corporate"
						title="Corporate"
						description="Learn from industry leaders and master essential skills"
					/>
				</div>
				<div className="w-[35%] pl-10">
					<Image
						src="/mg.png"
						alt="logo"
						width={300}
						height={300}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default MegaMenu;
