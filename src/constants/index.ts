import type { IHeroVocabularyItem, IMenuItem } from "../types/models";

export const PAGINATION_SIZE_TOPICS = 16;

export const menuItems: IMenuItem[] = [
  { key: "/", label: "Home", path: "/" },
  { key: "/dictionary", label: "Dictionary", path: "/dictionary" },
  { key: "/exercises", label: "Exercises", path: "/exercises" },
  { key: "/contacts", label: "Contacts", path: "/contacts" },
  { key: "/study", label: "Study", path: "/study" },
];

export const heroVocabulary: IHeroVocabularyItem[] = [
  { id: "1", serbian: "Vreme", english: "Time" },
  { id: "2", serbian: "Zdravo", english: "Hello" },
  { id: "3", serbian: "Hvala", english: "Thank you" },
  { id: "4", serbian: "Molim", english: "Please" },
  { id: "5", serbian: "Da", english: "Yes" },
  { id: "6", serbian: "Ne", english: "No" },
  { id: "7", serbian: "Kuća", english: "House" },
  { id: "8", serbian: "Ljubav", english: "Love" },
  { id: "9", serbian: "Voda", english: "Water" },
  { id: "10", serbian: "Hleb", english: "Bread" },
  { id: "11", serbian: "More", english: "Sea" },
  { id: "12", serbian: "Sunce", english: "Sun" },
  { id: "13", serbian: "Porodica", english: "Family" },
  { id: "14", serbian: "Priroda", english: "Nature" },
  { id: "15", serbian: "Grad", english: "City" },
];
