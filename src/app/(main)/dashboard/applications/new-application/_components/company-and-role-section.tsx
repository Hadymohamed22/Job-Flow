import CompanyAndRoleFields from "./company-and-role-fields";
import NewApplicationSection from "./new-application-section";

export default function CompanyAndRoleSection() {
  return (
    <NewApplicationSection title="Company & Role" iconName="company">
      <CompanyAndRoleFields />
    </NewApplicationSection>
  );
}
