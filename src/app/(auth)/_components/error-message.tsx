import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  message: string;
  className?: string;
};

export default function ErrorMessage({ message, className }: Props) {
  return (
    <p
      className={cn(
        "text-[10px] font-jetbrains text-red-600 mt-1 px-1",
        className,
      )}
    >
      {message}
    </p>
  );
}
