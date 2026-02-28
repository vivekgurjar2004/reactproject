import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import PostCard from "./PostCard";

const PostList = () => {
  const { currentPosts } = useContext(PostContext);

  return (
    <div className="grid">
      {currentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
