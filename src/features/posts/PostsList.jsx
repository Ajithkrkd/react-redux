import { useSelector } from "react-redux";
import "./postsList.css";
import { getAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
function PostsList() {
  const posts = useSelector(getAllPosts);

  const orderedPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

  const renderPost = orderedPost.map((post) => (
    <article key={post.id} className="post-card">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="d-flex justify-content-between">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date}></TimeAgo>
        <ReactionButtons post={post}/>
      </div>
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
