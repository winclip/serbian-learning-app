import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IWord } from "../../types/models";

interface LearnedWordsState {
  words: IWord[];
}

const saved = localStorage.getItem("learnedWords");
const initialState: LearnedWordsState = {
  words: saved ? JSON.parse(saved) : [],
};

const learnedWordsSlice = createSlice({
  name: "learnedWords",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<IWord>) => {
      if (!state.words.find((w) => w._id === action.payload._id)) {
        state.words.push(action.payload);
      }
      localStorage.setItem("learnedWords", JSON.stringify(state.words));
    },
    removeWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter((w) => w._id !== action.payload);
      localStorage.setItem("learnedWords", JSON.stringify(state.words));
    },
    clearWords: (state) => {
      state.words = [];
      localStorage.removeItem("learnedWords");
    },
  },
});

export const { addWord, removeWord, clearWords } = learnedWordsSlice.actions;
export default learnedWordsSlice.reducer;
