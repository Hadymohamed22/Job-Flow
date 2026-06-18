import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      {/* Email Field */}
      <div className="email-field">
        {/* Label */}
        <Label htmlFor="Email">Email</Label>

        {/* Password Input */}
        <Input type="email" placeholder="alex@company.com" id="Email" />
      </div>

      {/* Password Field */}
      <div className="password-field">
        {/* Label */}
        <Label htmlFor="Password">Password</Label>

        {/* Password Input */}
        <Input type="password" placeholder="••••••••••" id="Password" />
      </div>

      {/* Remember Me */}
      <div className="remember-me flex items-center gap-2">
        <Checkbox id="RememberMe" />
        <Label
          htmlFor="RememberMe"
          className="cursor-pointer mt-1 font-inter normal-case text-[#C7C4D7] text-sm"
        >
          Remember Me
        </Label>
      </div>

      {/* Sign In Button */}
      <Button className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14">
        Sign In
      </Button>
    </form>
  );
}
