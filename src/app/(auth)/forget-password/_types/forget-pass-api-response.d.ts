type SendEmailBase = { message: string };

export type SendEmailResponse =
  | SendEmailBase
  | (SendEmailBase & { error: boolean }); // error
