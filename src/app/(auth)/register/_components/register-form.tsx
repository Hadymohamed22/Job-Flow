"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "../../_components/error-message";
import { RegisterFieldsType } from "@/shared/lib/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/shared/lib/schema/auth.schema";
import useRegister from "../_hooks/use-register";
import ErrorBox from "@/shared/components/error-box";
import { Loader } from "lucide-react";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { successToast } from "@/shared/lib/utils/toasts.util";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  // Navigation
  const router = useRouter();

  // Hooks
  const { error, isPending, registerBy } = useRegister();

  // Forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFieldsType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<RegisterFieldsType> = (values) =>
    registerBy(values, {
      onSuccess: () => {
        successToast("Account Created Successfully , Login Now !");
        router.push("/login");
      },
    });

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name Field */}
      <div className="fullName-field">
        {/* Label */}
        <Label htmlFor="FullName">Full Name</Label>

        {/* Password Input */}
        <Input
          type="text"
          placeholder="Hady Mohamed"
          id="FullName"
          {...register("fullName")}
        />

        {/* Name Error Message */}
        {errors.fullName && (
          <ErrorMessage
            message={
              errors.fullName.message ||
              "FullName input value is wrong , try another one !"
            }
          />
        )}
      </div>

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
        {/* Label */}
        <Label htmlFor="Password">Password</Label>

        {/* Password Input */}
        <Input
          type="password"
          placeholder="••••••••••"
          id="Password"
          {...register("password")}
        />

        {/* Password Error Message */}
        {errors.password && (
          <ErrorMessage
            message={
              errors.password.message ||
              "Password input value is wrong , try another one !"
            }
          />
        )}
      </div>

      <>
        {/* Error Box */}
        {error && <ErrorBox message={error.message} />}

        {/* Sign In Button */}
        <Button
          className={cn(
            "shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold",
            isPending && "animate-pulse",
          )}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader className="me-2 animate-spin" />
              <span>Creating ...</span>
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </>
    </form>
  );
}
