import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

const POSTS_PER_PAGE = 6;

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        });
    }, 5000);
  }, []);

  const removePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <PostContext.Provider
      value={{
        currentPosts,
        currentPage,
        setCurrentPage,
        totalPages,
        removePost,
        loading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
