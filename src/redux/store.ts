import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./slice/themeSlice";
import productSliceReducer from "./slice/productSlice";

const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
    product: productSliceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
