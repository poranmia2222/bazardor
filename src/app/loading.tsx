import { ProductGridSkeleton, SkeletonBlock } from "@/component/LoadingSkeleton";

const LoadingPage = () => {
  return (
    <div
      className="container mx-auto space-y-12"
      role="status"
      aria-label="পৃষ্ঠা লোড হচ্ছে"
    >
      <span className="sr-only">পৃষ্ঠা লোড হচ্ছে</span>
      <div aria-hidden="true" className="mt-10 flex justify-between gap-8 rounded-3xl bg-white p-6">
        <div className="w-2/3 space-y-6">
          <SkeletonBlock className="h-8 w-40 rounded-full" />
          <SkeletonBlock className="h-12 w-4/5" />
          <SkeletonBlock className="h-6 w-full" />
          <SkeletonBlock className="h-6 w-3/4" />
          <SkeletonBlock className="h-11 w-36 rounded-lg" />
        </div>
        <SkeletonBlock className="h-64 w-1/3 rounded-2xl" />
      </div>

      {[6, 6, 9].map((count, index) => (
        <section key={index} aria-hidden="true">
          <div className="mb-5 mt-16">
            <SkeletonBlock className="h-9 w-56" />
          </div>
          <ProductGridSkeleton count={count} />
        </section>
      ))}
    </div>
  );
};

export default LoadingPage;