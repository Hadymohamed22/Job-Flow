import AuthFormIconContainer from "../../_components/auth-form-icon-container";
import AuthFormSubTitle from "../../_components/auth-form-sub-title";
import AuthFormTitle from "../../_components/auth-form-title";

type Props = {
  icon: React.ReactNode;
  title: string;
  subTitle: string | React.ReactNode;
};

export default function ForgetPassContainerHeader({
  icon,
  title,
  subTitle,
}: Props) {
  return (
    <div className="forget-pass-container-header flex flex-col items-center gap-2">
      {/* Icon */}
      <AuthFormIconContainer>{icon}</AuthFormIconContainer>

      {/* Title */}
      <AuthFormTitle title={title} className="mt-4" />

      {/* Sub Title */}
      <AuthFormSubTitle subTitle={subTitle} />
    </div>
  );
}
