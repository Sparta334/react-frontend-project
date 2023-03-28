import { createSlice } from "@reduxjs/toolkit";


// 初始化全域變數

const initialState = { UserProfile:[]};
const UserSlice = createSlice({

    name : 'user',
    initialState,
    reducers:{
        addUserProfile: () => {},
    },



});


export const selectUserProfile = (state) => state.user.UserProfile;

export const addUserProfile = UserSlice.actions;

export default UserSlice.reducer;