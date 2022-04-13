import { getBlogs } from "../api";
import { useFetch } from "../hooks/useFetch";
import BlogList from "./BlogList";

export default function Home() {
  const { data: blogs, isPending, error } = useFetch(getBlogs);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
