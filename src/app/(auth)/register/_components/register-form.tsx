import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-6">
      {/* Full Name Field */}
      <div className="email-field">
        {/* Label */}
        <Label htmlFor="FullName">Full Name</Label>

        {/* Password Input */}
        <Input type="text" placeholder="Hady Mohamed" id="FullName" />
      </div>

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

      {/* Sign In Button */}
      <Button className="shadow-lg shadow-[#C0C1FF1A] bg-[#8083FF] h-14 font-bold">
        Create Account
      </Button>
    </form>
  );
}
