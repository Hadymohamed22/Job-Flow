import { KeyRound } from "lucide-react";
import ForgetPassContainerHeader from "./forget-pass-container-header";
import NewPasswordForm from "./new-password-form";

type Props = {
  email: string;
  resetToken: string;
};

export default function NewPassStep({ email, resetToken }: Props) {
  return (
    <>
      {/* New Password Header */}
      <ForgetPassContainerHeader
        icon={<KeyRound />}
        title="Set new password"
        subTitle="Choose a strong, unique password to secure your account."
      />

      {/* New Password Form */}
      <NewPasswordForm email={email} resetToken={resetToken} />
    </>
  );
}
