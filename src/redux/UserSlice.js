import {createSlice} from '@reduxjs/toolkit';


export const UserSlice = createSlice({
    name: "user",
    initialState:{
        userData: {
        name: "",
        email: "",
        imageSrc: ""
        },

        loading: false,
        error: false,
        success: false
    },
    reducers:{
        addUser: (state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email
        },

        startUser: (state) => {
            state.loading= true
        },

        successUser:(state, action) => {
            state.userData = action.payload;
            state.loading = false;
            state.success = true
        },

        errorUser: (state) =>{
            state.loading = false;
            state.error = true;
        }
    }
})

export const {addUser, startUser, successUser, errorUser} = UserSlice.actions

export default UserSlice.reducer