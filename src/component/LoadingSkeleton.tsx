interface SkeletonBlockProps {
    className: string;
}

export const SkeletonBlock = ({ className }: SkeletonBlockProps) => (
    <div
        aria-hidden="true"
        className={`animate-pulse rounded bg-slate-200 ${className}`}
    />
);

interface ProductGridSkeletonProps {
    count?: number;
}

export const ProductGridSkeleton = ({
    count = 6,
}: ProductGridSkeletonProps) => (
    <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: count }, (_, index) => (
            <div
                key={index}
                aria-hidden="true"
                className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4"
            >
                <div className="flex items-center gap-3">
                    <SkeletonBlock className="h-14 w-14 rounded-xl" />
                    <div className="flex-1 space-y-2">
                        <SkeletonBlock className="h-5 w-3/4" />
                        <SkeletonBlock className="h-4 w-1/2" />
                    </div>
                </div>
                <div className="mt-5 space-y-3">
                    <SkeletonBlock className="h-4 w-1/3" />
                    <div className="flex items-center justify-between">
                        <SkeletonBlock className="h-7 w-1/3" />
                        <SkeletonBlock className="h-8 w-20 rounded-3xl" />
                    </div>
                </div>
            </div>
        ))}
    </div>
);
