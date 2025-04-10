import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  photo: string | null;
  email: string | null;
}

const initialState: UserState = {
  name: null,
  photo: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.name = null;
      state.photo = null;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
