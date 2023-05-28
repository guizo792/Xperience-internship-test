import { configureStore } from "@reduxjs/toolkit";
// reducers
import { reviewsReducer } from "./reviews/reviews.reducer";

export const store = configureStore({
  reducer: {
    reviewsData: reviewsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   }),
});

export default store;
