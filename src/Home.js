import { useEffect, useState } from "react";
import { getBlogs } from "./api";
import BlogList from "./components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (blogId) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(newBlogs);
  };

  // Run every time a component is rendered
  useEffect(() => {
    fetch(getBlogs)
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
  );
}
