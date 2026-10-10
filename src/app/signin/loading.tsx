import { SkeletonBlock } from "@/component/LoadingSkeleton";

const SignInLoading = () => (
    <div
        className="mx-auto mt-2 max-w-110"
        role="status"
        aria-label="সাইন ইন পেজ লোড হচ্ছে"
    >
        <span className="sr-only">সাইন ইন পেজ লোড হচ্ছে</span>
        <div aria-hidden="true">
            <div className="my-8 space-y-3">
                <SkeletonBlock className="mx-auto h-9 w-40" />
                <SkeletonBlock className="mx-auto h-5 w-72" />
            </div>
            <div className="space-y-4 rounded-2xl border border-slate-300 bg-white p-8">
                <SkeletonBlock className="h-5 w-20" />
                <SkeletonBlock className="h-12 w-full rounded-lg" />
                <SkeletonBlock className="h-5 w-28" />
                <SkeletonBlock className="h-12 w-full rounded-lg" />
                <SkeletonBlock className="h-11 w-full rounded-lg" />
                <SkeletonBlock className="mx-auto h-5 w-20" />
                <div className="flex gap-2">
                    <SkeletonBlock className="h-11 flex-1 rounded-lg" />
                    <SkeletonBlock className="h-11 flex-1 rounded-lg" />
                </div>
                <SkeletonBlock className="mx-auto h-5 w-52" />
            </div>
            <SkeletonBlock className="mx-auto my-4 h-5 w-40" />
        </div>
    </div>
);

export default SignInLoading;
