"use server";

import { getToken } from "@/shared/utils/get-token.util";

export async function deleteAccountAction(userid: string) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token is not valid or not provided !");

    const res = await fetch(`${process.env.API_URL}/auth/me/${userid}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });

    const payload: DeleteAccountResponse = await res.json();

    if ("error" in payload) {
      throw new Error(
        payload.message || "failed to delete account , Try again later !",
      );
    }

    return payload;
  } catch (err) {
    console.error((err as Error).message);
    throw new Error(`Error Happened : ${(err as Error).message}`);
  }
}
