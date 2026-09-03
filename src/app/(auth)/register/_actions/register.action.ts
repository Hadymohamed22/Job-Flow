"use server";

import { RegisterFieldsType } from "@/shared/lib/types/auth";
import { RegisterResponse } from "../_types/register";

export async function registerAction(values: RegisterFieldsType) {
  const res = await fetch(`${process.env.API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    }),
  });

  const payload: RegisterResponse = await res.json();

  if ("error" in payload) {
    throw new Error(payload.message || "Register failed , Try again later !");
  }

  return payload.data;
}
