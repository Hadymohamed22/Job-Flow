"use server";

import { getToken } from "@/shared/utils/get-token.util";
import { AddApplicationFormValues } from "../_schema/add-application.schema";

export async function createApplicationAction(
  values: AddApplicationFormValues,
) {
  const token = await getToken();

  if (!token) {
    throw new Error("Unauthorized User !");
  }

  const formData = new FormData();

  formData.append("companyName", values.companyName);
  formData.append("jobTitle", values.jobTitle);
  formData.append("workLocation", values.workLocation);
  formData.append("salary", values.salary);
  formData.append("jobURL", values.jobURL);
  formData.append("source", values.source);
  formData.append("current_status", values.current_status);
  formData.append("date", values.date);
  formData.append("company-image", values["company-image"]);

  if (values.notes?.trim()) {
    formData.append("notes", values.notes);
  }

  if (values.contactLink?.trim()) {
    formData.append("contactLink", values.contactLink);
  }

  const res = await fetch(`${process.env.API_URL}/applications`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
    body: formData,
  });

  const payload = await res.json();

  if (!res.ok) {
    const message =
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "Failed to create application";

    throw new Error(message);
  }

  if (payload && typeof payload === "object" && "error" in payload) {
    throw new Error(
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "Failed to create application",
    );
  }

  return payload;
}
