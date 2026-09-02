import { getServerSession } from "next-auth";
import EditUserInfoForm from "./edit-user-info-form";
import { authOptions } from "@/auth";

export default async function EditPersonalInfoContainer() {
  // Session
  const session = await getServerSession(authOptions);

  return (
    <div className="personal-info-container bg-[#131B2E] border border-[#464554] p-6 rounded-xl mt-6">
      <EditUserInfoForm
        fullname={session?.user?.fullName}
        email={session?.user?.email}
        id={session?.user?._id}
      />
    </div>
  );
}
