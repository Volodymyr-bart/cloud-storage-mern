import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5000/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("auth/register", {
      ...credentials,
    });
    setAuthHeader(response.data.token);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("auth/login", {
      ...credentials,
    });
    console.log(response);
    setAuthHeader(response.data.token);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const logOut = createAsyncThunk("auth/logot", async (credentials, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const refreshUser = createAsyncThunk("auth/refresh", async (credentials, thunkAPI) => {});
