import { Link } from "react-router-dom";
import { blogById } from "../api";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={blogById(blog.id)}>
              <h2>{blog.title}</h2>
              <p>Written by : {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
