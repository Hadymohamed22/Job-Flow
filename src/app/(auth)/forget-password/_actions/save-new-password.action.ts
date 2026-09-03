"use server";

import { ChangePassResponse } from "../_types/forget-pass-api-response";

type ParamsType = {
  newPassword: string;
  confirmNewPassword: string;
  email: string;
  resetToken: string;
};

export default async function saveNewPasswordAction({
  newPassword,
  confirmNewPassword,
  email,
  resetToken,
}: ParamsType) {
  const res = await fetch(`${process.env.API_URL}/auth/change-password`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resetToken}`,
    },
    body: JSON.stringify({ email, newPassword, confirmNewPassword }),
  });

  const payload: ChangePassResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.message || "failed to change password !");
  }

  return payload.message;
}
