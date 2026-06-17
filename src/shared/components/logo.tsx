import { ShoppingBag } from "lucide-react";

export default function Logo({ withText }: { withText?: boolean }) {
  return (
    <div className="logo-container flex items-center gap-2">
      {/* Logo Box */}
      <div className="logo-box size-8 bg-custom-primary text-tc-primary rounded-xs text-lg font-black flex items-center justify-center">
        <ShoppingBag size={18} />
      </div>
      {withText && (
        // Logo Text
        <h1 className="text-xl md:text-2xl font-black text-custom-primary">
          JobFlow
        </h1>
      )}
    </div>
  );
}
