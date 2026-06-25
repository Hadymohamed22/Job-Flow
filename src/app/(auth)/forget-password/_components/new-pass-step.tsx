import { KeyRound } from "lucide-react";
import ForgetPassContainerHeader from "./forget-pass-container-header";
import NewPasswordForm from "./new-password-form";

export default function NewPassStep() {
  return (
    <>
      {/* New Password Header */}
      <ForgetPassContainerHeader
        icon={<KeyRound />}
        title="Set new password"
        subTitle="Choose a strong, unique password to secure your account."
      />

      {/* New Password Form */}
      <NewPasswordForm />
    </>
  );
}
