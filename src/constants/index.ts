import type { IMenuItem } from "../types/models";

export const PAGINATION_SIZE_TOPICS = 16;

export const menuItems: IMenuItem[] = [
  { key: "/", label: "Home", path: "/" },
  { key: "/dictionary", label: "Dictionary", path: "/dictionary" },
  { key: "/exercises", label: "Exercises", path: "/exercises" },
  { key: "/contacts", label: "Contacts", path: "/contacts" },
  { key: "/study", label: "Study", path: "/study" },
];
