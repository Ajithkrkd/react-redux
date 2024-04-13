import { useSelector , useDispatch} from "react-redux";
import "./postsList.css";
import { getAllPosts ,getPostsErrors,getPostsStatus ,fetchPosts} from "./postsSlice";

import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";
function PostsList() {
  const posts = useSelector(getAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postErrors = useSelector(getPostsErrors);


  const dispatch = useDispatch();


 useEffect(() => {
    if(postStatus === 'idle'){
        dispatch(fetchPosts());
    }
 },[dispatch,postStatus])


 let content ;
 if (postStatus === "loading"){
    content = <p>Loading...</p>
 }else if(postStatus === 'Succeeded'){
    const orderedPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
     content = orderedPost.map((post) => (
        <PostExcerpt key={post.id} post={post}/>
      ));
 }else if( postStatus === 'failed'){
    content = <p>Error</p>
 }

  return (
    <div className="posts-list-container">
      <h2 className="posts-list-title">Latest Posts</h2>
      <div className="posts-list">{content}</div>
    </div>
  );
}

export default PostsList;
