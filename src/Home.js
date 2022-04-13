import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(ALL_BLOGS);

  const handleDelete = (blogId) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(newBlogs);
  };

  // Run every time a component is rendered
  useEffect(() => console.log("use effect ran"));

  return (
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
  );
}
