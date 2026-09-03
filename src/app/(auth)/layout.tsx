import Logo from "@/shared/components/logo";
import { MessageSquareMore } from "lucide-react";
import Copyright from "./_components/copyright";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-layout min-h-screen relative overflow-hidden before:pointer-events-none before:absolute before:-top-28 before:-left-36 before:size-72 before:md:size-125 before:lg:size-162.5 before:rounded-full before:bg-custom-primary/5 before:blur-3xl before:z-0 after:pointer-events-none after:absolute after:-bottom-36 after:-right-36 after:w-72 after:h-72 after:md:size-125 after:lg:size-162.5 after:rounded-full after:bg-custom-green/5 after:blur-3xl after:z-0 flex flex-col">
      {/* Header */}
      <header className="px-4 md:px-6 min-h-16 flex items-center justify-between relative z-20">
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
      <footer className="px-4 md:px-6 min-h-16 flex flex-col gap-1 md:flex-row md:gap-0 text-center md:text-start items-center justify-center md:justify-between font-jetbrains text-xs text-gray-400 border-t border-[#4645544D] relative z-20">
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
