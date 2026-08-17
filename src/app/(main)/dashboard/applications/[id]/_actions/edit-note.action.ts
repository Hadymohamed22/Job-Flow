"use server";

import { getToken } from "@/shared/utils/get-token.util";
import { AddNoteResponse } from "../_types/application-details-response";

export async function editNoteAction({
  application_id,
  note_id,
  note_text,
}: {
  application_id: string;
  note_id: string;
  note_text: string;
}) {
  try {
    const token = await getToken();

    if (!token) throw new Error("Token is not valid or not provided !");

    const res = await fetch(
      `${process.env.API_URL}/applications/${application_id}/notes/${note_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          new_note: note_text,
        }),
      },
    );

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const payload: AddNoteResponse = await res.json();

    if ("error" in payload) {
      throw new Error(
        payload.message || "Failed to edit note , Try again later !",
      );
    }

    return payload.data;
  } catch (err) {
    console.error((err as Error).message);
    throw new Error(`Error Happened : ${(err as Error).message}`);
  }
}
