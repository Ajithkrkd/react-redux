import { useSelector } from "react-redux";
import './postsList.css'
import { getAllPosts } from "./postsSlice";

function PostsList() {
  const posts = useSelector(getAllPosts);

  const renderPost = posts.map((post) => (
    <article key={post.id} className="post-card">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <div className="posts-list-container">
      <h2 className="posts-list-title">Latest Posts</h2>
      <div className="posts-list">{renderPost}</div>
    </div>
  );
}

export default PostsList;
