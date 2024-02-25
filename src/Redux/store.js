import { configureStore } from "@reduxjs/toolkit";
import { reducerCollector } from "./reducersCollector";

export const store = configureStore({
  reducer: reducerCollector,
});
