import Link from "next/link";
import AuthFormsFooter from "../../_components/auth-forms-footer";
import WelcomeAndLogoContainer from "../../login/_components/welcome-and-logo-container";
import RegisterForm from "./register-form";

export default function RegisterFormContainer() {
  return (
    <div className="register-form-container p-8 flex flex-col gap-8 border border-[#908FA033] rounded-lg shadow-md shadow-[#171F33B2] mx-5 container md:w-6/12 lg:w-4/12">
      {/* Logo & Welcome Message */}
      <WelcomeAndLogoContainer
        title="Create your account"
        subTitle="Join the high-performance job search"
        logoWithText
      />

      {/* Register Form */}
      <RegisterForm />

      {/* Don't Have An Account */}
      <AuthFormsFooter>
        Already have an account?
        <Link href="/login" className="duration-300 hover:text-white">
          Log in
        </Link>
      </AuthFormsFooter>
    </div>
  );
}
