import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  // Handlers
  const handleClick = () => signOut();

  return (
    <button
      className="logout-btn p-2 rounded-md bg-red-500/10 duration-300 hover:bg-red-500/20 text-red-500 flex items-center gap-1.5 cursor-pointer"
      aria-label="logout button"
      onClick={handleClick}
    >
      <LogOut size={16} className="rotate-180" />
      Logout
    </button>
  );
}
