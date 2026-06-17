import Logo from "@/shared/components/logo";
import { MessageSquareMore } from "lucide-react";
import Copyright from "./_components/copyright";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout min-h-screen">
      {/* Header */}
      <header className="px-4 md:px-6 min-h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo withText />

        {/* Contact Us Text */}
        <a
          href="https://wa.me/+201029379363"
          target="_blank"
          className="text-gray-500 hover:text-gray-400 duration-300 flex items-center gap-1 text-sm"
        >
          <MessageSquareMore size={14} /> Contact Us
        </a>
      </header>

      {children}

      {/* Footer */}
      <footer className="px-4 md:px-6 min-h-16 flex items-center justify-between font-jetbrains text-xs text-gray-400 border-t border-[#4645544D]">
        {/* Copyright */}
        <Copyright />

        {/* Developed By */}
        <p>
          Developed By{" "}
          <a
            href="https://www.linkedin.com/in/hady-elnifaly/"
            target="_blank"
            className="duration-300 hover:text-white underline"
          >
            Hady Mohamed
          </a>
        </p>
      </footer>
    </div>
  );
}
