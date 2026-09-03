import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  isPending: boolean;
  handleClick: () => Promise<string>;
  remainSeconds: number;
};

export default function ResendTimer({
  remainSeconds,
  isPending,
  handleClick,
}: Props) {
  const [seconds, setSeconds] = useState(remainSeconds);

  // Effects
  useEffect(() => {
    if (remainSeconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainSeconds]);

  return (
    <>
      {seconds > 0 ? (
        `Resend at : ${seconds}s`
      ) : (
        <span
          className="text-white/70 duration-300 hover:text-white cursor-pointer"
          onClick={handleClick}
        >
          {isPending ? <Loader className="animate-spin" size={14} /> : "Resend"}
        </span>
      )}
    </>
  );
}
