import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "Java spring boot master class",
    content: "hey this is a sample content",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions:{
        thumbsUp:0,
        thumbsDown:0,
        heart:0,
    }
  },
  {
    id: 2,
    title: "Hello Ajith",
    content: "hey there I am ajith",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions:{
        thumbsUp:0,
        thumbsDown:0,
        heart:0,
    }
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, title, content, userId) {
        return {
          payload: {
            id: id,
            title: title,
            content: content,
            userId: userId,
            date: new Date().toISOString(),
            reactions:{
                thumbsUp:0,
                thumbsDown:0,
                heart:0,
            }
          },
        };
      },
    },
    reactionAdded(state, action) {
        const {postId,reaction} = action.payload;
        const existingPost = state.find(post=>post.id === postId);
        if(existingPost){
            existingPost.reactions[reaction]++
        }

    }
  },
});

export const getAllPosts = (state) => state.posts;
export const { postAdd ,reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
