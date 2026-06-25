import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  subTitle: string | React.ReactNode;
  className?: string;
};

export default function AuthFormSubTitle({ subTitle, className }: Props) {
  // Variables
  const Tag = typeof subTitle === "string" ? "p" : "div";
  return (
    <Tag className={cn("mt-1 text-sm text-gray-500", className)}>
      {subTitle}
    </Tag>
  );
}
