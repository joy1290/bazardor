import { ProductCommonDataType } from "@/TypeScript/Type";
import HeroMain from "../components/Hero/HeroMain";
import ProductCard from "../components/ProductCard/ProductCard";

const allProductDataAPIResponse = async (): Promise<ProductCommonDataType[]> => {
  const response = await fetch(`${process.env.ALL_PRODUCT_API}`);
  const data = await response.json();

  return data;
}

export default async function Home() {
  const getAllProductData = await allProductDataAPIResponse();
  const todayUpPriceProduct = getAllProductData.filter(item => item.change.dir === "up");
  const todayDownPriceProduct = getAllProductData.filter(item => item.change.dir === "down");
  const filterTopDownPCTProduct = todayDownPriceProduct.sort((a, b) => a.change.pct - b.change.pct);
  const filterTopPCTProduct = todayUpPriceProduct.sort((a, b) => b.change.pct - a.change.pct);


  return (
    <>
      <HeroMain />

      <section id="products" className="container mx-auto mt-8 px-4 sm:px-6">
        <div className="my-3">
          <h1 className="text-xl font-bold sm:text-2xl"><span className="m-1 text-lg text-red-600 sm:text-xl">▲</span>আজ দাম বেড়েছে</h1>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filterTopPCTProduct.slice(0, 6).map((item) => (<ProductCard key={item.id} productData={item}/>))}
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold sm:text-2xl">
            <span className="m-1 text-lg text-green-600 sm:text-xl">▼</span>আজ দাম কমেছে</h1>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filterTopDownPCTProduct.slice(0, 6).map((item) => (<ProductCard key={item.id} productData={item}/>))}
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold sm:text-2xl">সব পণ্য </h1>
          <p className="mt-1 text-sm text-gray-500 sm:text-base">মোট {getAllProductData.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
          
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {getAllProductData.map((item) => (<ProductCard key={item.id} productData={item}/>))}
          </div>
          
        </div>
      </section>

    </>
  );
}