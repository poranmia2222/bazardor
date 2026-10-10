import CategoryContent from "@/component/CategoryContent";
import { Suspense } from "react";

interface Props {
  params: Promise<{ category: string }>;
}

const CategoryPage = ({ params }: Props) => {
  return (
    <Suspense fallback={<span className="loading loading-spinner text-success mx-auto"></span>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryPage;