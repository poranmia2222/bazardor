
import CategoryContent from "@/component/CategoryContent";
import { Suspense } from "react";

interface Props {
  params: Promise<{ category: string }>;
}

const CategoryPage = ({ params }: Props) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-lg text-success" />
        </div>
      }
    >
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryPage;
