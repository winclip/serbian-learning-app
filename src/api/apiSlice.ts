import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestion, ITopic, IWord } from "../types/models";
import { API_ENDPOINTS } from "../constants/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: "omit",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Topic", "Word", "Question"],
  endpoints: (builder) => ({
    getTopics: builder.query<ITopic[], void>({
      query: () => API_ENDPOINTS.TOPICS,
      providesTags: ["Topic"],
    }),
    getTopicById: builder.query<ITopic, string>({
      query: (id) => `${API_ENDPOINTS.TOPICS}/${id}`,
      providesTags: (result, error, id) => [{ type: "Topic", id }],
    }),

    getWords: builder.query<IWord[], { topicId?: string }>({
      query: ({ topicId }) => ({
        url: API_ENDPOINTS.WORDS,
        params: { topic: topicId },
      }),
      providesTags: ["Word"],
    }),
    getWordById: builder.query<IWord, string>({
      query: (id) => `${API_ENDPOINTS.WORDS}/${id}`,
      providesTags: (result, error, id) => [{ type: "Word", id }],
    }),

    getQuestions: builder.query<
      IQuestion[],
      { topicId?: string; sort?: "asc" | "desc" }
    >({
      query: ({ topicId, sort }) => ({
        url: API_ENDPOINTS.QUESTIONS,
        params: { ...(topicId && { topic: topicId }), ...(sort && { sort }) },
      }),
      providesTags: ["Question"],
    }),
    getQuestionById: builder.query<IQuestion, string>({
      query: (id) => `${API_ENDPOINTS.QUESTIONS}/${id}`,
      providesTags: (result, error, id) => [{ type: "Question", id }],
    }),
    getRandomQuestions: builder.query<
      IQuestion[],
      { topicId: string; limit?: number }
    >({
      query: ({ topicId, limit = 10 }) => ({
        url: `${API_ENDPOINTS.QUESTIONS}/random`,
        params: { topic: topicId, limit },
      }),
    }),
  }),
});

export const {
  useGetTopicsQuery,
  useGetTopicByIdQuery,
  useGetWordsQuery,
  useGetWordByIdQuery,
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  useGetRandomQuestionsQuery,
} = apiSlice;
