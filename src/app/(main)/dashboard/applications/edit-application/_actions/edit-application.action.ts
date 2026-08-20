"use server";

import { getToken } from "@/shared/utils/get-token.util";
import { EditApplicationFormFields } from "../../new-application/_schema/add-application.schema";

export async function editApplicationAction({
  applicationId,
  values,
}: {
  applicationId: string;
  values: EditApplicationFormFields;
}) {
  const token = await getToken();

  if (!token) {
    throw new Error("Unauthorized User !");
  }

  const formData = new FormData();

  Object.entries(values).forEach(([fieldKey, fieldValue]) => {
    if (fieldKey === "existingImageUrl") return;
    if (!fieldValue) return;

    if (fieldValue instanceof File) {
      formData.append(fieldKey, fieldValue);
      return;
    }

    if (Array.isArray(fieldValue) || typeof fieldValue === "object") {
      formData.append(fieldKey, JSON.stringify(fieldValue));
      return;
    }

    formData.append(fieldKey, String(fieldValue));
  });

  const res = await fetch(
    `${process.env.API_URL}/applications/${applicationId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
      body: formData,
    },
  );

  const payload = await res.json();

  if (!res.ok) {
    const message =
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "Failed to edit application";

    throw new Error(message);
  }

  if (payload && typeof payload === "object" && "error" in payload) {
    throw new Error(
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "Failed to edit application",
    );
  }

  return payload;
}
