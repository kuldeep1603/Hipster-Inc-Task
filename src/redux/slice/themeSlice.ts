import { createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | "colorful";

interface ThemeState {
  currentTheme: Theme;
}
const initialState: ThemeState = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
