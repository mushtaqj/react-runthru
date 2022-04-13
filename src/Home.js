import { useEffect, useState } from "react";
import { getBlogs } from "./api";
import BlogList from "./components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (blogId) => {
    const newBlogs = blogs.filter((blog) => blog.id !== blogId);
    setBlogs(newBlogs);
  };

  // Run every time a component is rendered
  useEffect(() => {
    fetch(getBlogs)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((blogs) => {
        setBlogs(blogs);
        setIsPending(false);
        setError(null);
      })
      .catch(({ message }) => {
        setError(message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
