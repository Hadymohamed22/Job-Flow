"use server";
import { getToken } from "@/shared/utils/get-token.util";

export default async function getActivityFeed() {
  try {
    const token = await getToken();

    if (!token) {
      throw new Error(`Unauthorized User !`);
    }

    const res = await fetch(
      `${process.env.API_URL}/applications/activity-feed`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const payload: GetActivityFeedResponse = await res.json();

    if ("error" in payload) {
      throw new Error(payload.message || "Failed to fetch activity feed !");
    }

    return payload.data;
  } catch (err) {
    console.error((err as Error).message);
    throw new Error(`Error Happened : ${(err as Error).message}`);
  }
}
