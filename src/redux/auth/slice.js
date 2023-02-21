import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.user.name = action.payload.name;
        // state.user.email = action.payload.email;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // state.user.name = action.payload.name;
        // state.user.email = action.payload.email;
        state.user = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        // state.user.name = action.payload.name;
        // state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
