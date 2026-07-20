import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export default async function Username() {
  // Variables
  const session = await getServerSession(authOptions);

  return (
    <span className="text-xs text-gray-500 font-jetbrains block -mt-0.5">
      {session?.user.fullName}
    </span>
  );
}
