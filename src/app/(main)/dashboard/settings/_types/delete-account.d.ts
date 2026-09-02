type DeleteAccountErrorResponse = ResponseBase & ErrorResponseBase;

type DeleteAccountSuccessResponse = {
  id: string;
  fullName: string;
  email: string;
};

type DeleteAccountResponse =
  | DeleteAccountErrorResponse
  | DeleteAccountSuccessResponse;
