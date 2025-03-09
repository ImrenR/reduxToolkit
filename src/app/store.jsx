import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/orderSlice";
import newsSlice from "../features/newsSlice";

export const store = configureStore ({
  reducer : {
    orderSlice: orderSlice,
    newsSlice:  newsSlice
  }
})