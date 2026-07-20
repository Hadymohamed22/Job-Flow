import { RegisterFieldsType } from "@/shared/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { registerAction } from "../_actions/register.action";

export default function useRegister() {
  const {
    error,
    isPending,
    mutateAsync: registerBy,
  } = useMutation({
    mutationFn: (values: RegisterFieldsType) => registerAction(values),
    gcTime: 5 * 60 * 1000,
  });

  return { error, isPending, registerBy };
}
