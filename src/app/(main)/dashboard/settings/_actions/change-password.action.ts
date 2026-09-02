"use server";

import { ChangePassResponse } from "@/app/(auth)/forget-password/_types/forget-pass-api-response";
import { getToken } from "@/shared/utils/get-token.util";

type Props = {
  newPassword: string;
  currentPassword: string;
  email?: string;
};

export async function changePasswordAction({
  email,
  currentPassword,
  newPassword,
}: Props) {
  try {
    const token = await getToken();

    if (!token) {
      throw new Error("Token is not valid or not provided!");
    }

    if (!email) {
      throw new Error(
        "Email is not provided. Try logging out and logging in again, then try changing your password.",
      );
    }

    const res = await fetch(`${process.env.API_URL}/auth/change-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        email,
        currentPassword,
        newPassword,
      }),
    });

    const payload: ChangePassResponse = await res.json();

    if ("error" in payload) {
      throw new Error(
        payload.message || "failed to change password , Try again later !",
      );
    }

    return payload;
  } catch (err) {
    console.error((err as Error).message);
    throw new Error(`Error Happened : ${(err as Error).message}`);
  }
}
