import CategoryContent from "@/component/CategoryContent";
import { Suspense } from "react";

interface Props {
  params: Promise<{ category: string }>;
}

const CategoryPage = ({ params }: Props) => {
  return (
    <Suspense fallback={<div>Loading category...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryPage;