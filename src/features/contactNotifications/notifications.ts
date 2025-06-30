import type { NotificationInstance } from "antd/es/notification/interface";

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

export const notifyError = (api: NotificationInstance, error: any) => {
  api.error({
    message: "Error",
    description:
      error?.data?.message ?? "Failed to send message. Please try again.",
    placement: "topRight",
  });
};
