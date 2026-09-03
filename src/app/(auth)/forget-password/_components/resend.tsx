"use client";

import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS } from "../_constants/forget-pass-steps.constant";
import ResendTimer from "./resend-timer";
import { errorToast, successToast } from "@/shared/lib/utils/toasts.util";
import useSendEmail from "../_hooks/use-send-email";

type Props = {
  email: string;
};

const RESEND_COOLDOWN_MS = 60_000;

function getRemainSeconds() {
  const resendTime = Number(
    localStorage.getItem(LOCAL_STORAGE_KEYS.RESEND_DATE),
  );
  return Math.max(0, Math.floor((resendTime - Date.now()) / 1000));
}

export default function Resend({ email }: Props) {
  const [remainSeconds, setRemainSeconds] = useState(getRemainSeconds);
  const [timerKey, setTimerKey] = useState(0);

  //   Hooks
  const { error, isPending, sendEmailTo } = useSendEmail();

  // Handlers
  const handleClick = () =>
    sendEmailTo(
      { email },
      {
        onSuccess: () => {
          // Update Resend Date
          localStorage.setItem(
            LOCAL_STORAGE_KEYS.RESEND_DATE,
            String(Date.now() + RESEND_COOLDOWN_MS),
          );
          setRemainSeconds(60);
          setTimerKey((prev) => prev + 1);

          successToast("Code Resend Successfully !");
        },
        onError: (error) => errorToast(error.message),
      },
    );

  useEffect(() => {
    if (error?.message) return errorToast(error.message);
  }, [error]);

  return (
    <p className="mt-2 text-center text-[#6A7271] flex flex-col items-center">
      <span>Didn{"'"}t receive code? </span>
      <ResendTimer
        key={timerKey}
        isPending={isPending}
        handleClick={handleClick}
        remainSeconds={remainSeconds}
      />
    </p>
  );
}
