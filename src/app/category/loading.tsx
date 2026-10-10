import { ProductGridSkeleton, SkeletonBlock } from "@/component/LoadingSkeleton";

const LoadingPage = () => {
  return (
    <div
      className="container mx-auto"
      role="status"
      aria-label="ক্যাটাগরি লোড হচ্ছে"
    >
      <span className="sr-only">ক্যাটাগরি লোড হচ্ছে</span>
      <div aria-hidden="true" className="mt-10 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
        <SkeletonBlock className="h-16 w-16 rounded-2xl" />
        <div className="space-y-2">
          <SkeletonBlock className="h-7 w-48" />
          <SkeletonBlock className="h-5 w-64" />
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 flex justify-end rounded-2xl border border-slate-200 bg-white p-4">
        <SkeletonBlock className="h-9 w-40 rounded-lg" />
      </div>
      <div className="mt-10">
        <ProductGridSkeleton count={9} />
      </div>
    </div>
  );
};

export default LoadingPage;