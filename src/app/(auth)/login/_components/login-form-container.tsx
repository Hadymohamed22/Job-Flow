import DoNotHaveAnAccountContainer from "./dont-have-account-container";
import LoginForm from "./login-form";
import WelcomeAndLogoContainer from "./welcome-and-logo-container";

export default function LoginFormContainer() {
  return (
    <div className="login-form p-8 flex flex-col gap-8 border border-[#908FA033] rounded-lg shadow-md shadow-[#171F33B2] mx-5 container md:w-6/12 lg:w-4/12">
      {/* Logo & Welcome Message */}
      <WelcomeAndLogoContainer />

      {/* Login Form */}
      <LoginForm />

      {/* Don't Have An Account */}
      <DoNotHaveAnAccountContainer />
    </div>
  );
}
