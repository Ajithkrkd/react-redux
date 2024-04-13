import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdd } from './postsSlice';
import { getAllUsers } from '../users/usersSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './postsList.css';


function AddPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const users = useSelector(getAllUsers);
    const [userId , setUserId] = useState("");


    const savePost = () => {
        if (title.trim() === "" || content.trim() === "") {
            return;
        } else {
            dispatch(
                postAdd(nanoid(),title,content,userId)
            );
            setContent("");
            setTitle("");
        }
    }

    const canSaveThePost = Boolean(title)&& Boolean(content) && Boolean(userId);

    const userOptions = users.map((user)=>(
      <option key={user.id} value={user.id}>
            {user.name}
      </option>  
    ))

    return (
        <div className="add-post-form-container py-4 my-5">
            <h1 className="add-post-form-title">Add a New Post</h1>
            <input
                className="form-control mb-3"
                type="text"
                id="postTitle"
                name="title"
                value={title}
                placeholder="Enter Title"
                onChange={(e) => { setTitle(e.target.value) }}
            />
            <textarea
                className="form-control mb-3"
                id="postContent"
                name="content"
                value={content}
                placeholder="Enter Content"
                onChange={(e) => { setContent(e.target.value) }}
            />
            <label className=''>Select Author</label>
            <select
                onChange={(e)=>{setUserId(e.target.value)}}
                value={userId}
                className='form-control my-3'
            >
                {userOptions}
            </select>

            <button
                className="btn btn-primary"
                onClick={savePost}
                disabled={!canSaveThePost}
            >
                Submit
            </button>
        </div>
    );
}

export default AddPostForm;
