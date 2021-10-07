import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_METHOD, APPLICATION_JSON, BASE_ROUTE_DEV } from "./constants";

export const getUser = createAsyncThunk("getUser", async (query, thunkAPI) => {
  const response = await fetch(`${BASE_ROUTE_DEV}/get_user/`, {
    headers: {
      "Content-Type": APPLICATION_JSON,
    },
    method: GET_METHOD,
  });
  const responseJSON = await response.json();
  return responseJSON;
});

export const getSales = createAsyncThunk(
  "getSales",
  async (query, thunkAPI) => {
    const response = await fetch(`${BASE_ROUTE_DEV}/get_sales/`, {
      headers: {
        "Content-Type": APPLICATION_JSON,
      },
      method: GET_METHOD,
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
);

export const getProfits = createAsyncThunk(
  "getProfits",
  async (query, thunkAPI) => {
    const response = await fetch(`${BASE_ROUTE_DEV}/get_profits/`, {
      headers: {
        "Content-Type": APPLICATION_JSON,
      },
      method: GET_METHOD,
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
);
