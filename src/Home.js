import { useState } from "react";
import { ALL_BLOGS } from "./data/blogs";

export default function Home() {
  const [blogs, setBlogs] = useState(ALL_BLOGS);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
