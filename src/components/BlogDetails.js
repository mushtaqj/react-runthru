import { useNavigate, useParams } from "react-router-dom";
import { blogById } from "../api";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogByIdApi = blogById(id, true);
  const { data: blog, error, isPending } = useFetch(blogByIdApi);
  const handleDelete = () => {
    fetch(blogByIdApi, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
