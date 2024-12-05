import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./api";

export const getLogin = createAsyncThunk(
  "Auth/getLogin",
  async (resD, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axiosInstance
        .post(
          `/admins/login`,
          {
            ...resD,
          },
        )
        .then((res) => res.data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuthLoading: false,
    error: null,
    LoginArr: null,
  },

  extraReducers: {
    [getLogin.pending]: (state, action) => {
      state.isAuthLoading = true;
    },
    [getLogin.fulfilled]: (state, action) => {
      state.LoginArr = action.payload.data;
      state.isAuthLoading = false;
    },
    [getLogin.rejected]: (state, action) => {
      state.isAuthLoading = false;
    },
  },
});

export default AuthSlice.reducer;
