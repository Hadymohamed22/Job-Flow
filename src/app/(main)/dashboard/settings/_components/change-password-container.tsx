import { getServerSession } from "next-auth";
import SecurityFields from "./security-fields";
import { authOptions } from "@/auth";

export default async function ChangePasswordContainer() {
  // Session
  const session = await getServerSession(authOptions);

  return (
    <div className="security-fields-container bg-[#131B2E] border border-[#464554] p-6 rounded-xl mt-6">
      {/* Security Fields : Password , New Password */}
      <SecurityFields email={session?.user.email} />
    </div>
  );
}
