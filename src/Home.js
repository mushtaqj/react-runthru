import { useState } from "react";
import BlogList from "./components/BlogList";
import { ALL_BLOGS } from "./data/blogs";

export default function Home() {
  const [blogs, setBlogs] = useState(ALL_BLOGS);

  const handleDelete = (blogId) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(newBlogs);
  };

  return (
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
  );
}
