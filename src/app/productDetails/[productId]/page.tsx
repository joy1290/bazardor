
import { converUnitName } from "@/components/ProductCard/ProductCard";
import ProductDetailsCard from "@/components/productDetailsCard/ProductDetailsCard";
import { ProductCommonDataType } from "@/TypeScript/Type";
import Link from "next/link";

const productFilterDataType = async (
    producId: string
): Promise<ProductCommonDataType> => {
    const response = await fetch(
        `${process.env.PRODUCT_DETAILS_API}/${producId}`
    );

    console.log("Status:", response.status);

    if (!response.ok) {
        throw new Error("Failed to fetch product details");
    }

    const data = await response.json();

    console.log("API response:", data);
    console.log("Change:", data?.change);

    return data;
};

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;

    const productDetails = await productFilterDataType(productId);

    console.log(productDetails);

    const changeDir = productDetails?.change?.dir ?? "same";
    const today = productDetails?.today ?? 0;
    const yesterday = productDetails?.yesterday ?? 0;
    const priceDifference = Math.abs(today - yesterday);
    const changePct = Math.abs(productDetails?.change?.pct ?? 0);
    const unit = productDetails?.unit;
    const category = productDetails?.category ?? "";
    const categoryNameBn = productDetails?.categoryNameBn ?? "ক্যাটাগরি";
    const nameBn = productDetails?.nameBn ?? "পণ্যের নাম";
    const image = productDetails?.image ?? "🛒";

    return (
        <section className="container mx-auto">
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <Link
                    href="/"
                    className="transition-colors hover:text-[#05893E]"
                >
                    হোম
                </Link>

                <span>/</span>

                <Link
                    href={`/categories/${category}`}
                    className="transition-colors hover:text-[#05893E]"
                >
                    {categoryNameBn}
                </Link>

                <span>/</span>

                <span className="font-medium text-gray-800">
                    {nameBn}
                </span>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
                        <p className="shrink-0 text-3xl sm:text-4xl">
                            {image}
                        </p>

                        <div className="min-w-0 flex-1">
                            <h1 className="text-lg font-bold leading-snug text-gray-900 sm:text-2xl">
                                {nameBn}
                            </h1>

                            <p className="mt-2 wrap-words text-sm leading-6 text-gray-700">
                                প্রতি {converUnitName(unit)} · {nameBn}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {changeDir === "up" ? (
                                    <>
                                        গতকালের তুলনায় আজ দাম বেড়েছে{" "}
                                        <span className="font-semibold">
                                            {priceDifference.toLocaleString(
                                                "bn-BD"
                                            )}{" "}
                                            টাকা
                                        </span>
                                    </>
                                ) : changeDir === "down" ? (
                                    <>
                                        <span className="mr-1 font-semibold text-green-600">
                                            ▼
                                        </span>
                                        গতকালের তুলনায় আজ দাম কমেছে{" "}
                                        <span className="font-semibold text-green-600">
                                            {priceDifference.toLocaleString(
                                                "bn-BD"
                                            )}{" "}
                                            টাকা
                                        </span>
                                    </>
                                ) : (
                                    <>গতকালের তুলনায় আজ দাম অপরিবর্তিত</>
                                )}
                            </p>
                        </div>
                    </div>

                    
                    <div className="w-full shrink-0 rounded-xl bg-gray-50 px-4 py-3 sm:w-44 sm:px-5 sm:py-4">
                        <p className="text-sm text-gray-600">
                            আজকের দাম
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                            {today.toLocaleString("bn-BD")}{" "}
                            <span className="ml-1 text-sm font-medium text-gray-600">
                                টাকা
                            </span>
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            / {converUnitName(unit)}
                        </p>

                        <p
                            className={`mt-2 text-sm font-semibold ${
                                changeDir === "up"
                                    ? "text-red-600"
                                    : changeDir === "down"
                                      ? "text-green-600"
                                      : "text-gray-500"
                            }`}
                        >
                            {changeDir === "up"
                                ? "▲"
                                : changeDir === "down"
                                  ? "▼"
                                  : ""}
                            {" "}
                            {changePct.toLocaleString("bn-BD")}%
                        </p>
                    </div>
                </div>
            </div>

            <ProductDetailsCard productDetails={productDetails} />
        </section>
        
    );
}
