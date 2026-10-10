import React from "react";
import { SkeletonBlock } from "@/component/LoadingSkeleton";

const LoadingPage = () => {
  return (
    <div
      className="container mx-auto"
      role="status"
      aria-label="পণ্যের তথ্য লোড হচ্ছে"
    >
      <span className="sr-only">পণ্যের তথ্য লোড হচ্ছে</span>
      <div aria-hidden="true" className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center gap-4">
          <SkeletonBlock className="h-16 w-16 rounded-2xl" />
          <div className="space-y-2">
            <SkeletonBlock className="h-7 w-48" />
            <SkeletonBlock className="h-5 w-32" />
            <SkeletonBlock className="h-5 w-64" />
          </div>
        </div>
        <div className="space-y-2 rounded-2xl bg-[#F0F5F0] px-8 py-4">
          <SkeletonBlock className="mx-auto h-5 w-20" />
          <SkeletonBlock className="h-10 w-24" />
          <SkeletonBlock className="mx-auto h-5 w-16" />
        </div>
      </div>

      <div aria-hidden="true" className="my-10 rounded-2xl border border-slate-200 bg-white p-4">
        <SkeletonBlock className="h-6 w-40" />
        <div className="my-4 flex flex-wrap gap-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className="w-full space-y-3 rounded-2xl border border-slate-200 p-4 sm:flex-1">
              <SkeletonBlock className="h-5 w-24" />
              <SkeletonBlock className="h-9 w-32" />
              <SkeletonBlock className="h-4 w-40" />
            </div>
          ))}
        </div>
        <SkeletonBlock className="my-4 h-6 w-52" />
        <div className="space-y-4 rounded-2xl border border-slate-200 p-4">
          {[0, 1, 2, 3].map((item) => (
            <SkeletonBlock key={item} className="h-8 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;