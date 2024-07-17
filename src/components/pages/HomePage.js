// import React, { useContext, useEffect } from "react";
// import { Context } from "../../context/Context";
// import BlogCard from '../../components/layout/BlogCard'
// import { fetchBlogs } from "../../api/api"

// const HomePage = () => {
//   const { blogs, setBlogs } = useContext(Context);

//   useEffect(() => {
//     const getBlogs = async () => {
//       const data = await fetchBlogs();
//       setBlogs(data.blogs);
//     };
//     getBlogs();
//   }, [setBlogs]);

//   return (
//     <div className="home-page">
//       {blogs.map((blog) => (
//         <BlogCard key={blog._id} blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default HomePage;












// import React, { useState, useEffect } from "react";
// import BlogCard from '../../components/layout/BlogCard';
// import { fetchBlogs } from "../../api/api";

// const HomePage = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const getBlogs = async () => {
//       try {
//         const data = await fetchBlogs();
//         setBlogs(data.blogs);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };
//     getBlogs();
//   }, []);

//   return (
//     <div className="home-page">
//       {blogs.map((blog) => (
//         <BlogCard key={blog._id} blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default HomePage;







import React, { useState, useEffect } from "react";
import BlogCard from '../../components/layout/BlogCard';
import { fetchBlogs } from "../../api/api";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        // Assuming `data` is structured as { blogs: [...] }
        setBlogs(data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Log the response content when error occurs
        console.log('Error response:', error.response); // Assuming you're passing response from backend
      }
    };
    getBlogs();
  }, []);

  return (
    <div className="home-page">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;
