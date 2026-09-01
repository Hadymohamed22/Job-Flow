import PageHeaderText from "../_components/page-header-text";
import EditUserInfoForm from "./_components/edit-user-info-form";

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
      <div className="profile-settings-content bg-[#131B2E] border border-[#464554] p-6 rounded-xl mt-6">
        <EditUserInfoForm />
      </div>
    </>
  );
}
