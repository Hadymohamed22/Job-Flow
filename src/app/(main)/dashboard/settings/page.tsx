import PageHeaderText from "../_components/page-header-text";
import ChangePasswordContainer from "./_components/change-password-container";
import EditPersonalInfoContainer from "./_components/edit-personal-info-container";

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

        <ChangePasswordContainer />
      </div>
    </>
  );
}
