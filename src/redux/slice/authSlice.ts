import { createSlice } from '@reduxjs/toolkit';
interface IAuth {
  auth: string;
}
export const projectSlice = createSlice({
  name: "project",
  initialState: {
    auth: "",
  } as IAuth,

  reducers: {
    setAuth(state) {
      state.auth = "test";
    },
  },
});

export const {} = projectSlice.actions;
