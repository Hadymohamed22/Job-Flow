import PageHeaderText from "../_components/page-header-text";
import EditPersonalInfoContainer from "./_components/edit-personal-info-container";
import SecurityFields from "./_components/security-fields";

export default function Page() {
  return (
    <>
      <header>
        {/* Profile Settings Page Header */}
        <PageHeaderText
          title="Profile Settings"
          subTitle="Manage your account information and security preferences."
        />
      </header>

      {/* Content */}
      <div className="profile-settings-content flex flex-col gap-4 md:gap-6">
        <EditPersonalInfoContainer />

        <div className="security-fields-container bg-[#131B2E] border border-[#464554] p-6 rounded-xl mt-6">
          {/* Security Fields : Password , New Password */}
          <SecurityFields />
        </div>
      </div>
    </>
  );
}
