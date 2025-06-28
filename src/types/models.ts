export interface ITopic {
  _id: string;
  nameSr: string;
  nameEn: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IWord {
  _id: string;
  topic: string | ITopic;
  wordSr: string;
  wordEn: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IQuestion {
  _id: string;
  topic: string | ITopic;
  questionText: string;
  options: string[];
  answerIndex: number;
  createdAt?: string;
  updatedAt?: string;
}
export type IMenuItem = {
  key: string;
  label: string;
  path: string;
};
export type IHeroVocabularyItem = {
  id: string;
  serbian: string;
  english: string;
};
