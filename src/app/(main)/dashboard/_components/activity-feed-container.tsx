import ErrorMessage from "@/app/(auth)/_components/error-message";
import ActivityFeedBox from "./activity-feed-box";
import getActivityFeed from "../_actions/get-activity-feed.action";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(relativeTime);
dayjs.extend(calendar);

// Variables
const statusToActionType: Record<
  ActivityFeedItem["status"],
  "new-application" | "edit" | "reject" | "interview"
> = {
  Applied: "new-application",
  Interviewing: "interview",
  Considering: "edit",
  Rejected: "reject",
};

const statusToActionText: Record<ActivityFeedItem["status"], string> = {
  Applied: "Application submitted",
  Interviewing: "Application moved to Interview",
  Considering: "Application moved to Considering",
  Rejected: "Application moved to Rejected",
};

function formatRelativeDate(date: string) {
  const target = dayjs(date);
  const now = dayjs();

  if (now.diff(target, "hour") < 24) {
    return target.fromNow();
  }

  return target.calendar(null, {
    sameDay: "[Today]",
    lastDay: "[Yesterday]",
    lastWeek: "dddd",
    sameElse: "MMM D, YYYY",
  });
}

export default async function ActivityFeedContainer() {
  // Variables
  let activityFeed;
  try {
    activityFeed = await getActivityFeed();
  } catch (error) {
    return <ErrorMessage message={(error as Error).message} />;
  }

  if (activityFeed.length === 0) {
    return (
      <p className="text-sm text-[#C7C4D7] mt-6">Not any activity yet !</p>
    );
  }

  return (
    <div className="activity-feed-container pl-4 border-l border-[#46455480] flex flex-col gap-4 md:gap-6 mt-6 grow">
      {activityFeed.map((item, index) => (
        <ActivityFeedBox
          key={`${item.applicationId}-${item.changed_at}-${index}`}
          date={formatRelativeDate(item.changed_at)}
          action={statusToActionText[item.status]}
          company={item.companyName}
          position={item.jobTitle}
          actionType={statusToActionType[item.status]}
        />
      ))}
    </div>
  );
}
