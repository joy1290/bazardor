import SortCard from "@/components/Sorting/SortingCard";
import { ProductCommonDataType } from "@/TypeScript/Type";

interface CategoryData {
id: string;
slug: string;
nameBn: string;
icon: string;
}

const getCategory = async (
categoryId: string
): Promise<CategoryData> => {
const url = `https://openapi.programming-hero.com/api/bazardor/categories/${encodeURIComponent(categoryId)}`;

const response = await fetch(url);

if (!response.ok) {
throw new Error(`Category API Error: ${response.status}`);
}

const contentType = response.headers.get("content-type");

if (!contentType?.includes("application/json")) {
const text = await response.text();
console.error("Category API returned HTML/text:", text.slice(0, 300));
throw new Error("Category API থেকে JSON পাওয়া যায়নি");
}

return response.json();
};

const getCategoryProducts = async (
categoryId: string
): Promise<ProductCommonDataType[]> => {
const url = `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(categoryId)}`;

const response = await fetch(url);

if (!response.ok) {
throw new Error(`Products API Error: ${response.status}`);
}

const contentType = response.headers.get("content-type");

if (!contentType?.includes("application/json")) {
const text = await response.text();
console.error("Products API returned HTML/text:", text.slice(0, 300));
throw new Error("Products API থেকে JSON পাওয়া যায়নি");
}

const data = await response.json();

if (!Array.isArray(data)) {
console.error("Unexpected products response:", data);
throw new Error("Products API response array নয়");
}

return data;
};

export default async function CategoryByProduct({
params,
}: {
params: Promise<{ categoryId: string }>;
}) {
const { categoryId } = await params;

const [category, products] = await Promise.all([
getCategory(categoryId),
getCategoryProducts(categoryId),
]);

return ( <section className="container mx-auto mt-6 px-4 sm:mt-10 sm:px-6"> <div> <div className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:gap-6 sm:px-8 sm:py-5"> <p className="my-2 shrink-0 text-3xl sm:my-4 sm:text-4xl">
{category.icon || "🛒"} </p>


      <div className="min-w-0">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {category.nameBn || "পণ্যের ক্যাটাগরি"}
        </h1>

        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          মোট {products.length.toLocaleString("bn-BD")}
          টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
    </div>

    {products.length > 0 ? (
      <SortCard getProductData={products} />
    ) : (
      <p className="mt-5 rounded-xl bg-white p-6 text-gray-600">
        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </p>
    )}
  </div>
</section>


);
}
