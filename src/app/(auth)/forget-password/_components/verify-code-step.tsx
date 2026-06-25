import { Mail } from "lucide-react";
import ForgetPassContainerHeader from "./forget-pass-container-header";

type Props = {
  email: string;
};

export default function VerifyCodeStep({ email }: Props) {
  return (
    <>
      {/* Verify Code Header */}
      <ForgetPassContainerHeader
        icon={<Mail />}
        title="Check your email"
        subTitle={`We sent a 6-digit code to ${email}`}
      />

      {/* Verify Code Form */}
    </>
  );
}
