
import { Suspense } from "react";
import Banner from "@/component/Banner";
import PriceRise from "@/component/PriceRise";
import PriceFall from "@/component/PriceFall";
import AllProducts from "@/component/AllProducts";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div className="h-64 animate-pulse" />}>
        <Banner />
      </Suspense>

      <Suspense fallback={<div className="h-48 animate-pulse" />}>
        <PriceRise />
      </Suspense>

      <Suspense fallback={<div className="h-48 animate-pulse" />}>
        <PriceFall />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse" />}>
        <AllProducts />
      </Suspense>
    </div>
  );
}
