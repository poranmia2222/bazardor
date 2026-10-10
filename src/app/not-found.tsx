import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-success">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        পেজ খুঁজে পাওয়া যায়নি!
      </h2>

      <p className="mt-2 text-slate-500">
        আপনি যে পেজটি খুঁজছেন, সেটি আমাদের ওয়েবসাইটে নেই।
      </p>

      <Link href="/" className="btn btn-success mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;