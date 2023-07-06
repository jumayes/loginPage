import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email:null,
    token:null,
    id:null,
};

const userSlice =  createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state,action){
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
        },
        reUser(state){
            state.email = null;
            state.id = null;
            state.token = null;
        }
    },
});

export const {setUser , reUser} = userSlice.actions;

export default userSlice.reducer;