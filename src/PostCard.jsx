import { useContext } from "react";
import { PostContext } from "./PostContext";

const PostCard = ({ post }) => {
  const { removePost } = useContext(PostContext);

  return (
    <div className="card">
      <button className="close-btn" onClick={() => removePost(post.id)}>
        closebtn
      </button>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;