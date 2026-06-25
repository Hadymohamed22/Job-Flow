import { User } from "next-auth";

type RegisterSuccessResponse = Pick<User, "data" | "token">;

type RegisterErrorResponse = {
  error: boolean;
};

export type RegisterResponse = {
  message: string;
} & (RegisterSuccessResponse | RegisterErrorResponse);
