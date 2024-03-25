import "./App.css";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import BlogDetail from "./components/BlogDetail";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogCardList />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

function BlogCardList() {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/blog/")
      .then(function (response) {
        setBlogs(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="loading">Loading ...</h1>;
  if (blogs.length === 0) return <h1 className="loading">NO Data.</h1>;

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      {blogs.map((blog) => (
        <BlogCard {...blog} />
      ))}
    </div>
  );
}
