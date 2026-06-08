// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#6366F1]/20 border-t-[#6366F1]"
          style={{ animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        <p className="text-sm text-[#94A3B8]">Loading...</p>
      </div>
    </div>
  );
}
