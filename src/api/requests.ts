import { API_ENDPOINTS } from "../constants/api";
import type { IQuestion, ITopic, IWord } from "../types/models";
import api from "./axios";

export const fetchTopics = () => api.get<ITopic[]>(API_ENDPOINTS.TOPICS);

export const fetchTopicById = (id: string) =>
  api.get<ITopic>(`${API_ENDPOINTS.TOPICS}/${id}`);

export const fetchWords = (topicId?: string) =>
  api.get<IWord[]>(API_ENDPOINTS.WORDS, { params: { topic: topicId } });

export const fetchWordById = (id: string) =>
  api.get<IWord>(`${API_ENDPOINTS.WORDS}/${id}`);

export const fetchQuestions = (topicId?: string, sort?: "asc" | "desc") =>
  api.get<IQuestion[]>(API_ENDPOINTS.QUESTIONS, {
    params: { ...(topicId && { topic: topicId }), ...(sort && { sort }) },
  });

export const fetchQuestionById = (id: string) =>
  api.get<IQuestion>(`${API_ENDPOINTS.QUESTIONS}/${id}`);

export const fetchRandomQuestions = (topicId: string, limit = 10) =>
  api.get<IQuestion[]>(`${API_ENDPOINTS.QUESTIONS}/random`, {
    params: { topic: topicId, limit },
  });
