"use server";

import { VerifyCodeResponse } from "../_types/forget-pass-api-response";

/**
 * Verifies the OTP code sent to the user's email during the password reset process.
 *
 * @param {string} params.email - The email address associated with the password reset.
 * @param {string} params.otpCode - The One-Time Password (OTP) code to verify.
 * @returns {Promise<string>} The resetToken if the verification succeeds.
 * @throws {Error} If the verification fails or the API returns an error message.
 */
export default async function verifyCodeAction({
  email,
  otpCode,
}: {
  email: string;
  otpCode: string;
}): Promise<string> {
  const res = await fetch(`${process.env.API_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otpCode }),
  });

  const payload: VerifyCodeResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.message || "failed to verify code !");
  }

  return payload.resetToken;
}
