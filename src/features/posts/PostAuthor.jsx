import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../users/usersSlice";
function PostAuthor({ userId }) {
  const users = useSelector(getAllUsers);
  const author = users.find((user) => user.id === userId);
  return (
    <div>
      By{"  "}
      <span>{author ? author.name : "Unknown Author"}</span>
    </div>
  );
}

export default PostAuthor;
