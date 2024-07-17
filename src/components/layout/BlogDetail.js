import React from "react";

const BlogDetail = ({ blog, onClose }) => {
  return (
    <div className="blog-detail">
      <button onClick={onClose}>Close</button>
      <h2>{blog.title}</h2>
      <p>{blog.detail}</p>
    </div>
  );
};

export default BlogDetail;
