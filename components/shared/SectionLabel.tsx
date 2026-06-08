// components/shared/SectionLabel.tsx
import { cn } from "@/lib/utils";

interface Props { children: React.ReactNode; className?: string; center?: boolean; }

export function SectionLabel({ children, className, center }: Props) {
  return (
    <span className={cn(
      "inline-block text-[11px] sm:text-xs font-semibold text-[#6366F1] tracking-[3px] uppercase mb-3",
      center && "text-center w-full block",
      className
    )}>
      {children}
    </span>
  );
}
