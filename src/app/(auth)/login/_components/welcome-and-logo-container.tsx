import Logo from "@/shared/components/logo";
import AuthFormTitle from "../../_components/auth-form-title";
import AuthFormSubTitle from "../../_components/auth-form-sub-title";

type WelcomeAndLogoContainerProps = {
  title: string;
  subTitle: string;
  logoWithText?: boolean;
};

export default function WelcomeAndLogoContainer({
  title = "Welcome back",
  subTitle = "Log in to manage your applications",
  logoWithText = false,
}: WelcomeAndLogoContainerProps) {
  return (
    <div className="welcome-and-logo-container flex flex-col items-center text-center">
      {/* Logo */}
      <Logo className="mb-4" withText={logoWithText} />
      {/* Auth Form Title */}
      <AuthFormTitle title={title} />
      {/* Sub Message */}
      <AuthFormSubTitle subTitle={subTitle} />
    </div>
  );
}
