import z from "zod";
import { editUserInfoFormSchema } from "../_schema/edit-user-info-form.schema";

type EditUserInfoFields = z.infer<typeof editUserInfoFormSchema>;

type EditUserInfoErrorResponse = ResponseBase & ErrorResponseBase;

type EditUserInfoSuccessResponse = {
  user: {
    id: string;
    fullName: string;
    email: string;
  };
};

type EditUserInfoResponse =
  | EditUserInfoErrorResponse
  | EditUserInfoSuccessResponse;
