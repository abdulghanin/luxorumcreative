// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-6xl sm:text-8xl font-bold text-[#6366F1]/20 mb-4 select-none">404</div>
        <h1 className="text-xl sm:text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-[#94A3B8] mb-8 text-sm sm:text-base max-w-sm mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <button className="w-full sm:w-auto bg-[#6366F1] hover:bg-[#818CF8] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
            Back to Home →
          </button>
        </Link>
      </div>
    </div>
  );
}
