import React, { useState, useContext } from "react";
import { Context } from "../../context/Context"
import { createBlog } from "../../api/api"

const BlogCreationPage = () => {
  const [blogData, setBlogData] = useState({ title: "", detail: "" });
  const { user } = useContext(Context);

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    await createBlog({ ...blogData, user: user._id });
    // Handle post-creation logic
  };

  return (
    <form onSubmit={handleCreateBlog}>
      <input
        type="text"
        value={blogData.title}
        onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        placeholder="Title"
      />
      <textarea
        value={blogData.detail}
        onChange={(e) => setBlogData({ ...blogData, detail: e.target.value })}
        placeholder="Detail"
      />
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default BlogCreationPage;
