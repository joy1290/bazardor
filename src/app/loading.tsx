export default function CardSkeleton() {
    return (

        <div className="w-full animate-pulse rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            {/* Product Info */}
            <div className="flex items-center gap-4">
                {/* Image Skeleton */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-200" />

                {/* Name & Unit Skeleton */}
                <div className="min-w-0 flex-1 space-y-2">
                    <div className="h-5 w-3/4 rounded-md bg-gray-200" />
                    <div className="h-4 w-1/3 rounded-md bg-gray-100" />
                </div>
            </div>

            {/* Price Skeleton */}
            <div className="mt-5 flex items-end justify-between">
                <div className="space-y-2">
                    {/* Today's Price Label */}
                    <div className="h-4 w-20 rounded-md bg-gray-100" />

                    {/* Price & Currency */}
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-28 rounded-md bg-gray-200" />
                        <div className="h-4 w-8 rounded-md bg-gray-100" />
                    </div>
                </div>

                {/* Change Percentage */}
                <div className="h-8 w-16 rounded-lg bg-gray-100" />
            </div>
        </div>


    )
}