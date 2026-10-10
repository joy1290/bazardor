import Image from "next/image";
import DisplayDate from "../Navbar/DisplayDate";
import HeroImage from "@/assets/bazar-hero.png"


export default function HeroMain() {

	return (
		<section className="container mx-auto mt-6 px-4 sm:mt-8 sm:px-6 lg:mt-10">
			<div className="flex flex-col overflow-hidden rounded-2xl bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
				<div className="flex-1">
					<div className="mb-4 inline-flex rounded-lg border border-[#BFE8CF] bg-[#F0FAF4] px-3 py-1.5 text-sm font-medium text-[#05893E] sm:px-4 sm:py-2">
						<DisplayDate className="text-xs sm:text-sm" />
					</div>

					<h1 className="max-w-2xl px-0 text-2xl font-bold leading-tight text-gray-900 sm:px-0 sm:text-3xl lg:text-4xl">আজকের বাজারের দাম এক নজরে</h1>
					<p className="mt-3 line-clamp-2 max-w-2xl px-0 text-sm leading-6 text-gray-600 sm:text-base"> চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
					
					<a href="#products">
					<button className="mt-5 rounded-lg bg-[#05893E] px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-[#05893E]/30 transition hover:bg-[#047536] cursor-pointer sm:px-6 sm:py-3">সব পণ্য দেখুন</button>
					</a>
				</div>


				<div className="mt-6 flex justify-center lg:mt-0 lg:w-[35%] lg:justify-end">
					<Image src={HeroImage} width={320} height={300} alt="বাজারের পণ্য" className="h-auto w-52 object-contain sm:w-64 lg:w-80" />
				</div>

			</div>
		</section>
	)
}