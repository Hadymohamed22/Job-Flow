import Link from "next/link";

export default function DoNotHaveAnAccountContainer() {
  return (
    <p className="border-t border-gray-400 min-h-11 flex justify-center gap-2 text-center items-end text-sm text-gray-400">
      Don{"'"}t have an account?{"  "}
      <Link href="/register" className="duration-300 hover:text-white">
        Sign up
      </Link>
    </p>
  );
}
