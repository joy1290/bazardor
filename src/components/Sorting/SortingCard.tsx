'use client'
import { ProductCommonDataType } from "@/TypeScript/Type";
import { Suspense, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/loading";

interface SortingCardProps {
    getProductData: ProductCommonDataType[]
}

export default function SortCard({ getProductData }: SortingCardProps) {
    const [sort, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

    const sortProductByPrice = (data: ProductCommonDataType[]) => {
        const sortProduct = [...data];

        if (sort === "price-asc") {
            sortProduct.sort((a, b) => a.today - b.today);
        } else if (sort === "price-desc") {
            sortProduct.sort((a, b) => b.today - a.today);
        }

        return sortProduct
    }
    const sortedData = sortProductByPrice(getProductData);

    return (
        <> 
            <div className="my-3 flex flex-col gap-3 rounded-xl bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-end sm:gap-4 sm:px-5">
                <label htmlFor="product-sort" className="text-sm font-medium text-gray-600"> সাজান</label>

                <select id="product-sort" value={sort} onChange={(e) => setSortBy( e.target.value as "default" | "price-asc" | "price-desc")} className="w-full cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#05893E] focus:ring-2 focus:ring-[#05893E]/15 sm:w-auto sm:min-w-52">
                    <option value="default">ডিফল্ট</option>
                    <option value="price-asc">দাম: কম থেকে বেশি</option>
                    <option value="price-desc">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <p className="mt-5 text-sm text-gray-500">মোট {sortedData.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sortedData.map((item) => (
                    <Suspense fallback={<ProductCardSkeleton/>} key={item.id}>
                    <ProductCard key={item.id} productData={item} />
                    </Suspense>
                    ))}
            </div>
        </>


    )
}