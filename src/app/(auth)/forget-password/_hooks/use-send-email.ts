import { useMutation } from "@tanstack/react-query";
import { SendEmailFieldsType } from "../_types/forget-pass-fields";
import sendEmailAction from "../_actions/send-email.action";

export default function useSendEmail() {
  const {
    mutateAsync: sendEmailTo,
    isPending,
    error,
  } = useMutation({
    mutationFn: (values: SendEmailFieldsType) => sendEmailAction(values.email),
  });

  return { sendEmailTo, isPending, error };
}
