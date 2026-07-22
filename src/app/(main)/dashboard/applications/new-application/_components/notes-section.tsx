import NewApplicationSection from "./new-application-section";
import NotesSectionFields from "./notes-section-fields";

export default function NotesSection() {
  return (
    <NewApplicationSection
      title="Notes & Insights"
      iconName="notes"
      className="grow"
    >
      <NotesSectionFields />
    </NewApplicationSection>
  );
}
