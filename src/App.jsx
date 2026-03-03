import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostProvider,PostContext } from './PostContext'
import PostList from './PostList'
import Pagination from './Pagination'

const MainApp = () => {
  const { loading } = useContext(PostContext);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <PostList />
      <Pagination />
    </>
  );
};

function App() {
  return (
    <PostProvider>
      <MainApp />
    </PostProvider>
  );
}

export default App;
