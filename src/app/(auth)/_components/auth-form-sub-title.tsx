import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  subTitle: string;
  className?: string;
};

export default function AuthFormSubTitle({ subTitle, className }: Props) {
  return (
    <p className={cn("mt-1 text-sm text-gray-500", className)}>{subTitle}</p>
  );
}
