import AllProducts from "@/component/AllProducts";
import Banner from "@/component/Banner";
import PriceFall from "@/component/PriceFall";
import PriceRise from "@/component/PriceRise";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PriceRise></PriceRise>
      <PriceFall></PriceFall>
      <AllProducts></AllProducts>
    </div>
  );
}
