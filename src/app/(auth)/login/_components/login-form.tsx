"use client";

import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginFields } from "../_types/login";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/shared/lib/schema/auth.schema";
import ErrorMessage from "../../_components/error-message";
import { Loader } from "lucide-react";
import ErrorBox from "@/shared/components/error-box";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { successToast } from "@/shared/lib/utils/toasts.util";
import Link from "next/link";

export default function LoginForm() {
  // Navigation
  const router = useRouter();

  // States
  const [submitError, setSubmitError] = useState<string>();

  // Forms
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    control,
  } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<LoginFields> = async (values) => {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (!res?.ok)
        return setSubmitError(
          res!.error || "Failed to login , try again later !",
        );

      const callback = new URLSearchParams(location.search).get("callback");

      router.push(callback || "/dashboard");
      successToast("Login Successfully , Enjoy");
    } catch (e) {
      setSubmitError((e as Error).message);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Email Field */}
      <div className="email-field">
        {/* Label */}
        <Label htmlFor="Email">Email</Label>

        {/* Password Input */}
        <Input
          type="email"
          placeholder="alex@company.com"
          id="Email"
          {...register("email")}
        />

        {/* Email Error Message */}
        {errors.email && (
          <ErrorMessage
            message={
              errors.email.message ||
              "Email input value is wrong , try another one !"
            }
          />
        )}
      </div>

      {/* Password Field */}
      <div className="password-field">
        <div className="passLabel-forgetPass flex items-center justify-between">
          {/* Label */}
          <Label htmlFor="Password">Password</Label>

          {/* Forget Password */}
          <Link
            href="/forget-password"
            className="font-jetbrains font-medium text-xs duration-300 text-custom-primary mb-1 hover:text-cyan-300"
          >
            Forget Password ?
          </Link>
        </div>

        {/* Password Input */}
        <Input
          type="password"
          placeholder="••••••••••"
          id="Password"
          {...register("password")}
        />

        {/* Email Error Message */}
        {errors.password && (
          <ErrorMessage
            message={
              errors.password.message ||
              "Password input value is wrong , try another one !"
            }
          />
        )}
      </div>

      {/* Remember Me */}
      <div className="remember-me flex items-center gap-2">
        <Controller
          control={control}
          name="rememberMe"
          render={({ field }) => (
            <Checkbox
              id="RememberMe"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />

        <Label
          htmlFor="RememberMe"
          className="cursor-pointer mt-1 font-inter normal-case text-[#C7C4D7] text-sm"
        >
          Remember Me
        </Label>
      </div>

      <>
        {/* Error Box */}
        {submitError && <ErrorBox message={submitError} />}

        {/* Sign In Button */}
        <Button
          className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader className="me-2 animate-spin" />
              <span>Please Wait ...</span>
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </>
    </form>
  );
}
