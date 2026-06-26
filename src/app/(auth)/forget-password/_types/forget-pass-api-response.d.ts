// Send Email
type SendEmailBase = { message: string };

export type SendEmailResponse =
  | SendEmailBase
  | (SendEmailBase & { error: boolean });

//   Verify Code
type VerifyCodeSuccessResponse = {
  resetToken: string;
};

type VerifyCodeErrorResponse = {
  error: boolean;
};

export type VerifyCodeResponse = { message: string } & (
  | VerifyCodeSuccessResponse
  | VerifyCodeErrorResponse
);
