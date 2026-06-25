"use client";
import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Input } from "@/shared/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { Label } from "@/shared/components/ui/label";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="flex justify-center p-4 items-center gap-4">
      {/* Primary Button */}
      <Button>Primary</Button>

      <div className="email-field">
        {/* Label */}
        <Label>Email</Label>

        {/* Password Input */}
        <Input type="email" placeholder="alex@company.com" />
      </div>

      {/* Password Field */}
      <div className="password-field">
        {/* Label */}
        <Label>Password</Label>

        {/* Password Input */}
        <Input type="password" placeholder="••••••••••" />
      </div>

      {/* Inputs */}
      <div className="inputs flex flex-col gap-4">
        {/* Text Field */}
        <div className="text-field">
          {/* Label */}
          <Label>full name</Label>

          {/* Text Input */}
          <Input placeholder="Hady Mohamed" />
        </div>

        {/* Email Field */}
        <div className="email-field">
          {/* Label */}
          <Label>Email</Label>

          {/* Password Input */}
          <Input type="email" placeholder="alex@company.com" />
        </div>

        {/* Password Field */}
        <div className="password-field">
          {/* Label */}
          <Label>Password</Label>

          {/* Password Input */}
          <Input type="password" placeholder="••••••••••" />
        </div>

        {/* Remember Me */}
        <div className="remember-me flex items-center gap-2">
          <Checkbox id="RememberMe" />
          <Label htmlFor="RememberMe" className="cursor-pointer mt-1.5">
            Remember Me
          </Label>
        </div>

        {/* Toasts */}
        {/* Toast Test Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 text-sm"
            onClick={() =>
              toast.success("This is a success toast!", {
                className:
                  "!bg-emerald-50 !border-emerald-500 !text-emerald-900 dark:!bg-emerald-800 dark:!border-emerald-400 dark:!text-emerald-100",
              })
            }
          >
            Success Toast
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm"
            onClick={() => toast.info("This is an info toast!")}
          >
            Info Toast
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600 text-sm"
            onClick={() => toast.warning("This is a warning toast!")}
          >
            Warning Toast
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
            onClick={() =>
              toast.error("This is an error toast!", {
                className:
                  "!bg-red-50 !border-red-500 !text-red-900 dark:!bg-red-800 dark:!border-red-400 dark:!text-red-100",
              })
            }
          >
            Error Toast
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600 text-sm"
            onClick={() =>
              toast.loading(
                "This is a loading toast. It will disappear in 2s.",
                { duration: 2000 },
              )
            }
          >
            Loading Toast
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 text-sm"
            onClick={() => toast("This is a normal toast!")}
          >
            Default Toast
          </button>
        </div>

        {/* OTP Input */}
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}
