import NewApplicationSection from "./new-application-section";
import FinanceAndLogisticsFields from "./finance-and-logistics-fields";

export default function FinanceAndLogisticsSection() {
  return (
    <NewApplicationSection title="Finance & Logistics" iconName="salary">
      <FinanceAndLogisticsFields />
    </NewApplicationSection>
  );
}
