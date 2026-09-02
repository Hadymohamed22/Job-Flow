import z from "zod";
import { changePasswordSchema } from "../_schema/change-password.schema";

type ChangePasswordFields = z.infer<typeof changePasswordSchema>;

type ChangePasswordErrorResponse = ResponseBase & ErrorResponseBase;

type ChangePasswordResponse = ResponseBase | ChangePasswordErrorResponse;
