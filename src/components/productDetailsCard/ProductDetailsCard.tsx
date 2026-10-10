import { ProductCommonDataType } from "@/TypeScript/Type";
import { converUnitName } from "../ProductCard/ProductCard";

interface ProductDetailsProps {
  productDetails: ProductCommonDataType
}

export default function ProductDetailsCard({ productDetails }: ProductDetailsProps) {
  const sortByMinPrice = productDetails.markets.sort((a, b) => a.min - b.min);
  const sortByMaxPrice = productDetails.markets.sort((a, b) => b.max - a.max);

  return (
    <div className="bg-white shadow-sm rounded-2xl p-4 md:p-6 my-4">


      <h1 className="text-xl md:text-2xl font-bold text-gray-800 border-b border-gray-100 pb-3 mb-5">
        দামের সারসংক্ষেপ
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


        <div className="px-6 py-4 border-2 border-gray-200 rounded-2xl flex flex-col justify-between">
          <p className="text-sm text-gray-500 mb-1">সর্বনিম্ন দাম</p>
          <p className="text-2xl font-bold text-green-600 my-1">
            {(sortByMinPrice[0]?.min)?.toLocaleString("bn-BD")}{" "}
            <span className="text-xl font-normal">টাকা</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">সবচেয়ে কম দামের বাজার</p>
        </div>


        <div className="px-6 py-4 border-2 border-gray-200 rounded-2xl flex flex-col justify-between">
          <p className="text-sm text-gray-500 mb-1">সর্বাধিক দাম</p>
          <p className="text-2xl font-bold text-red-600 my-1">
            {(sortByMaxPrice[0]?.max)?.toLocaleString("bn-BD")}{" "}
            <span className="text-xl font-normal">টাকা</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">সবচেয়ে বেশি দামের বাজার</p>
        </div>


        <div className="px-6 py-4 border-2 border-gray-200 rounded-2xl flex flex-col justify-between">
          <p className="text-sm text-gray-500 mb-1">গড় দাম</p>
          <p className="text-2xl font-bold text-green-600 my-1">
            {((sortByMaxPrice[0].max + sortByMinPrice[0].min) / 2)?.toLocaleString("bn-BD")}{" "}
            <span className="text-xl font-normal">টাকা</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            প্রতি {converUnitName(productDetails?.unit)}-এর হিসাবে
          </p>
        </div>

      </div>

      <div>
        <h1 className="text-2xl font-bold px-2 mt-5">বাজারভিত্তিক আজকের দাম</h1>

        <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden my-4">


          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

              <thead>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <th className="px-6 py-3 text-sm font-semibold text-gray-500">বাজার</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-500">বিভাগ</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-500">সর্বনিম্ন</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-500">সর্বাধিক</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-500">গড়</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-300">
                {productDetails?.markets?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                      {item.market}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.division}
                    </td>
                    <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                      {item.min?.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="px-6 py-4 text-sm text-red-600 font-semibold">
                      {item.max?.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                      {((item.max + item.min) / 2)?.toLocaleString("bn-BD")} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}