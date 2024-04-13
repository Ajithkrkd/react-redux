import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: 1,title: "Java spring boot master class",content: "hey this is a sample content"},
    {id: 2,title: "Hello Ajith",content: "hey there I am ajith"}
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdd :{
            reducer (state, action) {
                state.push(action.payload)
        },
            prepare(id,title,content){
                return {
                    payload: {
                        id: id,
                        title: title,
                        content: content
                    }
                }
            }
        },
    }
})

export const getAllPosts = (state) => state.posts;
export const {postAdd} = postsSlice.actions;
export default postsSlice.reducer;