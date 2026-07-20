import { Suspense } from "react";
import SettingsAndLogout from "./settings-and-logout";
import Username from "./username";
import UsernameSkeleton from "../_skeletons/username.skeleton";

export default function UserWelcome() {
  return (
    <div className="user-welcome pb-2 pt-4 md:border-t border-[#464554] flex items-center justify-center md:justify-between">
      {/* Hi User */}
      <div className="hi-user-text hidden md:block">
        <span className="text-sm text-gray-300 block">Hi,</span>
        <Suspense fallback={<UsernameSkeleton />}>
          <Username />
        </Suspense>
      </div>

      {/* Settings & Logout */}
      <SettingsAndLogout />
    </div>
  );
}
