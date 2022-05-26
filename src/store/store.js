import { configureStore } from "@reduxjs/toolkit";
import AppearanceReducer from "../features/Appearance";
import { testApi } from "../services/TestService";

export const store = configureStore({
  reducer: {
    appearance: AppearanceReducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(testApi.middleware),
});
