import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import learnedWordsReducer from "../features/learnedWords/learnedWordsSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    learnedWords: learnedWordsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
