import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProductData } from "./productSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Dispatch the fetchProductData thunk to fetch initial data
store.dispatch(fetchProductData());

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
