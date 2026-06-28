"use client";

import { Settings, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LogoutBtn from "./logout-btn";

export default function SettingsAndLogout() {
  // States
  const [menuAppear, setMenuAppear] = useState(false);

  // Variables
  const baseIconStyles = "duration-300 cursor-pointer md:size-5 size-4.5";
  const currentIconStyles = `${baseIconStyles} ${
    menuAppear
      ? "text-gray-200 hover:text-gray-400"
      : "text-gray-300 hover:text-gray-400"
  }`;

  // Handlers
  const toggleMenuAppearance = () => setMenuAppear((prev) => !prev);

  return (
    <div className="setting-and-logout relative">
      {!menuAppear ? (
        <Settings
          className={currentIconStyles}
          onClick={toggleMenuAppearance}
        />
      ) : (
        <X className={currentIconStyles} onClick={toggleMenuAppearance} />
      )}

      {menuAppear && (
        <div className="menu w-40 md:w-50 absolute left-full bottom-full p-2 rounded-md flex flex-col gap-2 bg-bg shadow shadow-custom-primary/20 text-sm">
          {/* Profile Link */}
          <Link
            href={"/dashboard/profile-settings"}
            className="p-2 text-gray-400 duration-300 hover:text-gray-300"
          >
            Profile Settings
          </Link>

          {/* LogOut Button */}
          <LogoutBtn />
        </div>
      )}
    </div>
  );
}
