export default function DetailsSkeleton() {

    return (

        <div className="my-4 animate-pulse rounded-2xl bg-white p-4 shadow-sm md:p-6">
            {/* Section Title */}
            <div className="mb-5 border-b border-gray-100 pb-3">
                <div className="h-7 w-48 rounded-md bg-gray-200" />
            </div>

            {/* Price Summary Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between rounded-2xl border-2 border-gray-200 px-6 py-4"
                    >
                        {/* Label */}
                        <div className="mb-2 h-4 w-24 rounded bg-gray-200" />

                        {/* Price */}
                        <div className="my-1 flex items-center gap-2">
                            <div className="h-8 w-28 rounded-md bg-gray-200" />
                            <div className="h-5 w-10 rounded bg-gray-100" />
                        </div>

                        {/* Description */}
                        <div className="mt-2 h-4 w-40 max-w-full rounded bg-gray-100" />
                    </div>
                ))}
            </div>

            {/* Market Price Section Title */}
            <div className="mt-5 px-2">
                <div className="h-7 w-64 max-w-full rounded-md bg-gray-200" />
            </div>

            {/* Market Price Table */}
            <div className="my-4 overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse text-left">
                        {/* Table Header */}
                        <thead>
                            <tr className="border-b border-gray-300 bg-gray-50">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <th key={index} className="px-6 py-3">
                                        <div className="h-4 w-20 rounded bg-gray-200" />
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Rows */}
                        <tbody className="divide-y divide-gray-200">
                            {Array.from({ length: 5 }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: 5 }).map((_, colIndex) => (
                                        <td key={colIndex} className="px-6 py-4">
                                            <div
                                                className={`h-4 rounded bg-gray-200 ${colIndex === 0
                                                        ? "w-32"
                                                        : colIndex === 1
                                                            ? "w-24"
                                                            : "w-20"
                                                    }`}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}