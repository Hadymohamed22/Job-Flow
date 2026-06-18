import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

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
      </div>
    </div>
  );
}
