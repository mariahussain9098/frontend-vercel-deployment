import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context"
import BlogCard from "../../components/layout/BlogCard";
import { fetchBlogs } from "../../api/api";

const MyBlogsPage = () => {
  const { blogs, setBlogs, user } = useContext(Context);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data.blogs.filter(blog => blog.user._id === user._id));
    };
    getBlogs();
  }, [setBlogs, user._id]);

  return (
    <div className="my-blogs-page">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default MyBlogsPage;
