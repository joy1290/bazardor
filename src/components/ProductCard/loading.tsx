export default function ProductCardSkeleton() {
    return (

        <div className="w-full animate-pulse rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            {/* Product Info */}
            <div className="flex items-center gap-4">
                {/* Image Skeleton */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F5FAF7] p-2">
                    <div className="h-10 w-10 rounded-lg bg-gray-200" />
                </div>

                {/* Name & Unit Skeleton */}
                <div className="min-w-0 flex-1 space-y-3">
                    <div className="h-5 w-3/4 rounded-md bg-gray-200" />
                    <div className="h-3 w-1/3 rounded-md bg-gray-100" />
                </div>
            </div>

            {/* Price Skeleton */}
            <div className="mt-5 flex items-end justify-between gap-3">
                <div className="space-y-2">
                    <div className="h-4 w-20 rounded-md bg-gray-100" />

                    <div className="flex items-center gap-2">
                        <div className="h-8 w-28 rounded-md bg-gray-200" />
                        <div className="h-4 w-8 rounded-md bg-gray-100" />
                    </div>
                </div>

                {/* Price Change Skeleton */}
                <div className="h-9 w-20 shrink-0 rounded-lg bg-[#E8F7EF]" />
            </div>
        </div>

    )
}