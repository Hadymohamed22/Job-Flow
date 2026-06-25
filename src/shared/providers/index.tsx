import { Toaster } from "sonner";
import TanstackProvider from "./components/tanstack-query.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackProvider>
      {children}
      <Toaster position="bottom-right" />
    </TanstackProvider>
  );
}
