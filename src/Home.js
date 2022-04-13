import { useState } from "react";
import BlogList from "./components/BlogList";
import { ALL_BLOGS } from "./data/blogs";

export default function Home() {
  const [blogs] = useState(ALL_BLOGS);

  return <BlogList blogs={blogs} title="All Blogs"/>;
}
