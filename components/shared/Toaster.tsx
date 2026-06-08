"use client";
// components/shared/Toaster.tsx
import { useState, useEffect } from "react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error";
}

let toastListeners: ((toast: Toast) => void)[] = [];

export function showToast(message: string, type: "success" | "error" = "success") {
  const toast: Toast = { id: Date.now().toString(), message, type };
  toastListeners.forEach((fn) => fn(toast));
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 5000);
    };
    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter((fn) => fn !== listener);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-5 py-3 rounded-xl border text-sm font-medium max-w-sm shadow-xl transition-all ${
            toast.type === "success"
              ? "bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}
        >
          {toast.type === "success" ? "✅ " : "❌ "}
          {toast.message}
        </div>
      ))}
    </div>
  );
}
