import { FORGET_PASS_STEPS } from "./../_constants/forget-pass-steps.constant";

export type FORGET_PASS_STEPS_TYPE =
  (typeof FORGET_PASS_STEPS)[keyof typeof FORGET_PASS_STEPS];
