import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state , action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess : (state , action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state , action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart : (state) =>{
            state.loading = true;
        },
        deleteUserSuccess : (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure :(state , action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signOutUserStart : (state) =>{
            state.loading = true;
        },
        signOutUserSuccess : (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure :(state , action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});
export const { signInStart , signInSuccess , signInFailure , 
                updateUserStart , updateUserSuccess , updateUserFailure, 
                deleteUserStart ,deleteUserSuccess , deleteUserFailure,
            signOutUserStart,signOutUserSuccess, signOutUserFailure} = userSlice.actions;

export default userSlice.reducer;

// {
// 	"name": "teskt",
// 	"description": "tjest",
// 	"address": "tesht",
//   	"regularPrice" : 100,
// 	"discountPrice": 500,
// 	"bathrooms": 5,
// 	"bedrooms" : 5,
// 	"furnished" : true,
// 	"parking" : true,
// 	"type": "rent",
// 	"offer": true,
// 	"imageUrls": [ "dsjgds" , "dagaga" ],
// 	"userRef": "ehhkjfs92384"
// }