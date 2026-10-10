
import { notFound } from "next/navigation";
import { Product } from "@/type/type";
import SortSection from "./SortSection";

interface ProductDataType {
  params: Promise<{ category: string }>;
}

const CategoryContent = async ({ params }: ProductDataType) => {
  const { category } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(category)}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    notFound();
  }

  const englishToBanglaNumber = (number: number): string => {
    const banglaDigits = "০১২৩৪৫৬৭৮৯";

    return String(number).replace(
      /\d/g,
      (digit) => banglaDigits[Number(digit)]
    );
  };

  return (
    <div className="container mx-auto">
      <div className="mt-10 flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
        <p className="rounded-2xl bg-slate-200 p-4 text-3xl">
          {data[0].categoryIcon}
        </p>

        <div>
          <h1 className="text-2xl font-bold">
            {data[0].categoryNameBn}
          </h1>

          <p>
            {englishToBanglaNumber(data.length)}
            টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <SortSection data={data} />
    </div>
  );
};

export default CategoryContent;
