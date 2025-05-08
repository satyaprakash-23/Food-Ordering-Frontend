import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedInStatus: false,
  },
  reducers: {
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
    toggleAuthStatus: (state) => {
      state.loggedInStatus = true;
    },
    logOut: (state)=>{
      state.loggedInStatus = false;
    }
    // addPassword: (state,action) =>{
    //     state.passwords.push(action.payload);
    // }
  },
});

export const { addUsers, toggleAuthStatus,logOut } = userSlice.actions;
export default userSlice.reducer;
