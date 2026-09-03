import { cn } from "../lib/utils/tailwind-merge";

type Props = {
  message: string;
  className?: string;
};

export default function ErrorBox({ message, className }: Props) {
  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto py-3 px-4 bg-red-400/10 border border-red-500 font-jetbrains text-red-500 rounded-lg shadow-md flex items-center gap-2 text-xs",
        className,
      )}
    >
      <span className="wrap-break-word">{message}</span>
    </div>
  );
}
