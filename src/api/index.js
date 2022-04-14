const HOST = "http://localhost:8000";
const BLOGS_ROOT = "blogs";

const blogsRoot = `${HOST}/${BLOGS_ROOT}`;

const getBlogs = blogsRoot;

const blogById = (id, absoloute) =>
  !absoloute ? `${BLOGS_ROOT}/${id}` : `${getBlogs}/${id}`;

export { getBlogs, blogById, blogsRoot };
