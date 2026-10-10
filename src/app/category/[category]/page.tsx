
import { Suspense } from "react";
import CategoryContent from "@/component/CategoryContent";

interface Props {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: Props) {
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
}
