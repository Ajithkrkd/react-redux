import React from 'react'

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
function PostExcerpt({post}) {
  return (
    <article  className="post-card">
    <h1>{post.title}</h1>
    <p>{post.body.substring(0,100)}</p>
    <div className="d-flex justify-content-between">
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date}></TimeAgo>
      <ReactionButtons post={post}/>
    </div>
  </article>
  )
}

export default PostExcerpt