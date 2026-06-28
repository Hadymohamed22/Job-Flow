import { ShoppingBag } from "lucide-react";
import { cn } from "../lib/utils/tailwind-merge";

export default function Logo({
  withText,
  className,
  textClassName,
}: {
  withText?: boolean;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("logo-container flex items-center gap-2", className)}>
      {/* Logo Box */}
      <div className="logo-box size-8 bg-custom-primary text-tc-primary rounded-xs text-lg font-black flex items-center justify-center">
        <ShoppingBag size={18} />
      </div>
      {withText && (
        // Logo Text
        <h1
          className={cn(
            "text-xl md:text-2xl font-black text-custom-primary",
            textClassName,
          )}
        >
          JobFlow
        </h1>
      )}
    </div>
  );
}
