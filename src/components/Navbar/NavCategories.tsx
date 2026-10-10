'use client'
import { ProductCategoriesDataType } from "@/TypeScript/Type"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavCategoriesDataProps {
    data: ProductCategoriesDataType
}

export default function NavCategories({ data }: NavCategoriesDataProps) {
    const pathname = usePathname();

    const isActive = pathname === `/categories/${data.id}`;

  return (
    <Link
      href={`/categories/${data.id}`}
      className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2text-sm font-mediumtransition-all duration-200 active:scale-95
      ${
          isActive
            ? "bg-[#05893E] text-[#FFFFFF] shadow-sm shadow-[#05893E]/25"
            : "text-gray-600 hover:bg-[#05893E] hover:text-[#FFFFFF] hover:shadow-sm hover:shadow-[#05893E]/15"}`}
      >
     
      <p>{data.nameBn}</p>
      <p>{data.icon}</p>
    </Link>
  );
}