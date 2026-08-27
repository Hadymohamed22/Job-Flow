"use server";
import { getToken } from "@/shared/utils/get-token.util";

export default async function getUserStatisticsAction() {
  try {
    const token = await getToken();

    if (!token) {
      throw new Error(`Unauthorized User !`);
    }

    const res = await fetch(`${process.env.API_URL}/applications/statistics`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const payload: GetUserStatisticsResponse = await res.json();

    if ("error" in payload) {
      throw new Error(payload.message || "Failed to fetch user statistics !");
    }

    return payload.data;
  } catch (err) {
    console.error((err as Error).message);
    throw new Error(`Error Happened : ${(err as Error).message}`);
  }
}
