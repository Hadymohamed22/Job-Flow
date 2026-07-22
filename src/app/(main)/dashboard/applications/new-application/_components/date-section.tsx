import DateSectionFields from "./date-section-fields";
import NewApplicationSection from "./new-application-section";

export default function DateSection() {
  return (
    <NewApplicationSection title="Date" iconName="calendar" className="grow">
      <DateSectionFields />
    </NewApplicationSection>
  );
}
