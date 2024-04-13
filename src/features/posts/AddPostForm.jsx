import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdd } from './postsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './postsList.css'; // Import your CSS file for styling

function AddPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const savePost = () => {
        if (title.trim() === "" || content.trim() === "") {
            return;
        } else {
            dispatch(
                postAdd(nanoid(),title,content)
            );
            setContent("");
            setTitle("");
        }
    }

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
            <button
                className="btn btn-primary"
                onClick={savePost}
            >
                Submit
            </button>
        </div>
    );
}

export default AddPostForm;
