
import Image from "next/image";
import NavbarImage from "@/assets/logo-icon.png"
import DateDisplay from "./DisplayDate";
import { ProductCategoriesDataType, ProductCommonDataType } from "@/TypeScript/Type";
import NavCategories from "./NavCategories";
import Marquee from "react-fast-marquee";
import AuthButton from "./AuthButton";
import Link from "next/link";

const productsCategoriesAPIResponse = async (): Promise<ProductCategoriesDataType[]> => {
	const response = await fetch(`${process.env.ALL_CATEGORIES_API}`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error("Failed to fetch data")
	}

	return data;
}

const productAPIResponse = async (): Promise<ProductCommonDataType[]> => {
	const response = await fetch(`${process.env.ALL_PRODUCT_API}`);
	const data = await response.json();

	return data;
}

export default async function Navbar() {
	const getProductCategories = await productsCategoriesAPIResponse();
	const getProductData = await productAPIResponse();


	return (
		<nav className="sticky top-0 z-50">

			<div className="bg-[#FFFFFF] py-3 shadow-sm">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="flex items-center justify-between gap-4">

						<div className="flex min-w-0 items-center gap-2">
							<div className="shrink-0 rounded-2xl bg-[#05893E] p-3 sm:p-4">
								<Link className="cursor-pointer" href={"/"}>
								<Image src={NavbarImage} width={20} height={20} alt="Navbar logo" />
								</Link>
							</div>

							<div className="min-w-0">
								<h1 className="truncate text-lg font-bold sm:text-xl">বাজার দর</h1>
								<DateDisplay className="text-sm text-gray-400" />
							</div>
						</div>

						<AuthButton/>
						
					</div>

				</div>
			</div>


			<div className="w-full bg-[#FFFFFF] shadow-sm">
				<div className="container mx-auto flex w-full gap-4 overflow-x-auto px-4 py-1 sm:gap-6 sm:px-6 sm:py-2 scrollbar-hide">
					{getProductCategories.map((item) => (
						<NavCategories key={item.id} data={item} />
					))}
				</div>
			</div>


			<div className="w-full overflow-hidden py-2 bg-[#FFFFFF] shadow-sm mt-0.5">
				<Marquee pauseOnHover speed={100} gradient={false}>

					<div className="flex items-center gap-8 whitespace-nowrap">

						{getProductData.map((item) => (
							<div key={item.id} className="flex items-center gap-2">
								<p className="text-sm font-medium cursor-pointer">{item.nameBn}</p>
								<p className="text-sm font-medium cursor-pointer">{item.today} টাকা/কেজি</p>
								<p className={`text-sm font-medium cursor-pointer ${item.change.dir === "up" ? "text-red-700" : "text-green-700"}`}> <span className="text-xl">{item.change.dir === "up" ? "▲" : "▼"}</span> {Math.abs(item.change.pct)} %</p>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</nav>
	)
}