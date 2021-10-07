import { createAsyncThunk } from "@reduxjs/toolkit";

const GET_METHOD = "GET";
const APPLICATION_JSON = "application/json";

export const getUser = createAsyncThunk("getUser", async (query, thunkAPI) => {
  const response = await fetch("http://127.0.0.1:5000/get_user/", {
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
    const response = await fetch("http://127.0.0.1:5000/get_sales/", {
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
    const response = await fetch("http://127.0.0.1:5000/get_profits/", {
      headers: {
        "Content-Type": APPLICATION_JSON,
      },
      method: GET_METHOD,
    });
    const responseJSON = await response.json();
    return responseJSON;
  }
);
