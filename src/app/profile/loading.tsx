import { SkeletonBlock } from "@/component/LoadingSkeleton";

const ProfileLoading = () => (
    <div
        className="mx-auto mt-10 max-w-4xl"
        role="status"
        aria-label="প্রোফাইল লোড হচ্ছে"
    >
        <span className="sr-only">প্রোফাইল লোড হচ্ছে</span>
        <div aria-hidden="true">
            <SkeletonBlock className="h-8 w-48" />
            <SkeletonBlock className="mt-2 h-5 w-64" />
            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-4">
                    <SkeletonBlock className="h-16 w-16 rounded-xl" />
                    <div className="space-y-2">
                        <SkeletonBlock className="h-6 w-40" />
                        <SkeletonBlock className="h-5 w-52" />
                    </div>
                </div>
                <SkeletonBlock className="h-11 w-28 rounded-lg" />
            </div>
            <div className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-white p-4">
                <SkeletonBlock className="h-5 w-20" />
                <SkeletonBlock className="h-12 w-full rounded-lg" />
                <SkeletonBlock className="h-11 w-24 rounded-lg" />
            </div>
        </div>
    </div>
);

export default ProfileLoading;
