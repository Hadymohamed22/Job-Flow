import ActivityFeedBox from "./activity-feed-box";

export default function ActivityFeedContainer() {
  return (
    <div className="activity-feed-container pl-4 border-l border-[#46455480] flex flex-col gap-4 md:gap-6 mt-6 grow">
      <ActivityFeedBox
        date={"1 Hour age"}
        action="Application moved to Interview"
        company="Stark Industries"
        position="Product Designer"
        actionType="interview"
      />

      <ActivityFeedBox
        date={"6 Hours ago"}
        action="Application moved to Interview"
        company="Stark Industries"
        position="Product Designer"
        actionType="new-application"
      />
      <ActivityFeedBox
        date={"2 days ago"}
        action="Application moved to Interview"
        company="Stark Industries"
        position="Product Designer"
      />
      <ActivityFeedBox
        date={"Yesterday"}
        action="Application moved to Interview"
        company="Stark Industries"
        position="Product Designer"
        actionType="new-application"
      />
    </div>
  );
}
