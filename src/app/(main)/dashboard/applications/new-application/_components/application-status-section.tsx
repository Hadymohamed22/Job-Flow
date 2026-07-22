import ApplicationStatusFields from "./application-status-fields";
import NewApplicationSection from "./new-application-section";

export default function ApplicationStatusSection() {
  return (
    <NewApplicationSection title="Application Status" iconName="application" className="grow">
      <ApplicationStatusFields />
    </NewApplicationSection>
  );
}
