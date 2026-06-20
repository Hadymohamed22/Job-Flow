import Logo from "@/shared/components/logo";

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
      {/* Welcome Title */}
      <h3 className="text-3xl font-semibold text-white">{title}</h3>
      {/* Sub Message */}
      <p className="mt-1 text-sm text-gray-500">{subTitle}</p>
    </div>
  );
}
