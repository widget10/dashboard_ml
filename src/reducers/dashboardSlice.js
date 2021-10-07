import { createSlice } from "@reduxjs/toolkit";
import { getUser, getSales, getProfits } from "../thunks";
const initialState = {
  isLoading: false,
  user: { name: "Username", email: "user@email.com" },
  sales_data: [],
  profit_data: [],
};

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  extraReducers: {
    [getUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled.type]: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.error = "";
      }
      state.isLoading = false;
    },
    [getUser.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getSales.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSales.fulfilled.type]: (state, action) => {
      if (action.payload) {
        state.sales_data = action.payload;
        state.error = "";
      }
      state.isLoading = false;
    },
    [getSales.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getProfits.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProfits.fulfilled.type]: (state, action) => {
      if (action.payload) {
        state.profit_data = action.payload;
        state.error = "";
      }
      state.isLoading = false;
    },
    [getProfits.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});
