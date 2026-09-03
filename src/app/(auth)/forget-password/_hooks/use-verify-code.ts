import { useMutation } from "@tanstack/react-query";
import { VerifyCodeFieldsType } from "../_types/forget-pass-fields";
import verifyCodeAction from "../_actions/verify-code.action";

export default function useVerifyCode() {
  const {
    mutateAsync: verifyCode,
    isPending,
    error,
  } = useMutation({
    mutationFn: (values: VerifyCodeFieldsType & { email: string }) =>
      verifyCodeAction({ email: values.email, otpCode: values.otp }),
  });
  return { verifyCode, isPending, error };
}
