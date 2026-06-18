import Logo from "@/shared/components/logo";

export default function WelcomeAndLogoContainer() {
  return (
    <div className="welcome-and-logo-container flex flex-col items-center text-center">
      {/* Logo */}
      <Logo className="mb-4" />

      {/* Welcome Title */}
      <h3 className="text-3xl font-semibold text-white">Welcome back</h3>

      {/* Sub Message */}
      <p className="mt-1 text-sm text-gray-500">
        Log in to manage your applications
      </p>
    </div>
  );
}
