"use server";

import { SendEmailResponse } from "../_types/forget-pass-api-response";

export default async function sendEmailAction(email: string) {
  const res = await fetch(`${process.env.API_URL}/auth/forget-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const payload: SendEmailResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.message || "failed to send code to email !");
  }

  return payload.message;
}
