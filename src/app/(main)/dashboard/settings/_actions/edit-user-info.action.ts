"use server";

import { getToken } from "@/shared/utils/get-token.util";
import {
  EditUserInfoFields,
  EditUserInfoResponse,
} from "../_types/edit-user-info-form";

export async function editUserInfoAction({
  fullName,
  email,
}: EditUserInfoFields) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token is not valid or not provided !");

    const res = await fetch(`${process.env.API_URL}/auth/me/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        email,
        fullName,
      }),
    });

    const payload: EditUserInfoResponse = await res.json();

    if ("error" in payload) {
      throw new Error(
        payload.message || "failed to edit user info , Try again later !",
      );
    }

    return payload.user;
  } catch (err) {
    console.error((err as Error).message);
    throw new Error(`Error Happened : ${(err as Error).message}`);
  }
}
