import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { NotificationInstance } from "antd/es/notification/interface";

interface ErrorData {
  message?: string;
}

interface ErrorWithData {
  data?: ErrorData | null;
}

export const notifySuccess = (
  api: NotificationInstance,
  msg = "Your message has been sent successfully!"
) => {
  api.success({
    message: "Success",
    description: msg,
    placement: "topRight",
  });
};

function hasErrorMessage(
  error: unknown
): error is { data: { message: string } } {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as ErrorWithData).data === "object" &&
    (error as ErrorWithData).data !== null &&
    "message" in (error as ErrorWithData).data! &&
    typeof (error as ErrorWithData).data!.message === "string"
  );
}

export const notifyError = (
  api: NotificationInstance,
  error: FetchBaseQueryError | unknown
) => {
  const description = hasErrorMessage(error)
    ? error.data.message
    : "Failed to send message. Please try again.";

  api.error({
    message: "Error",
    description,
    placement: "topRight",
  });
};
