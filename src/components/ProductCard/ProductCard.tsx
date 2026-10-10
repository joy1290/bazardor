import { ProductCommonDataType } from "@/TypeScript/Type"
import Link from "next/link"


interface ProductCardProps {
    productData: ProductCommonDataType
}

export const converUnitName = (name: string): string => {
    if(name === "dozen"){
        return "প্রতি ডজন"
    }else if(name === "litre"){
        return "প্রতি লিটার"
    }else{
        return "প্রতি কেজি"
    }
}
export default function ProductCard({ productData }: ProductCardProps) {
    
    return (
        <div className="group w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#05893E] cursor-pointer hover:shadow-md">
           <Link href={`/productDetails/${productData.id}`}>
            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F5FAF7] p-2">
                    <p className="p-3 text-2xl object-contain">{productData.image}</p>
                </div>

                <div className="min-w-0">
                    <h2 className="truncate text-lg font-bold text-gray-900">{productData.nameBn}</h2>
                    <p className="mt-1 text-sm text-gray-500">{converUnitName(productData.unit)}</p>
                </div>
            </div>

            {/* Price */}
            <div className="mt-5 flex items-end justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">
                        আজকের দাম
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-900">
                        {productData.today.toLocaleString("bn-BD")}
                        <span className="ml-1 text-sm font-medium text-gray-500">
                            টাকা
                        </span>
                    </p>
                </div>

                {/* Change */}
                <div className="rounded-lg bg-[#E8F7EF] px-2.5 py-1.5 text-sm font-semibold text-[#05893E]">
                    <span className="text-lg">▲</span>{" "}
                    {Math.abs(productData.change.pct)}%
                </div>
            </div>
            </Link>
        </div>
    )
}