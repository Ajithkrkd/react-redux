import { createSlice } from "@reduxjs/toolkit";

    const initialState = [
        {id:"1",name:"Abinav"},
        {id:"2",name:"fathima"},
        {id:"3",name:"krishnan"},
    ]

    const usersSlice = createSlice({
        name:"users",
        initialState,
        reducers: {

        }
    })

    export const getAllUsers = (state) => state.users;
    export default usersSlice.reducer;