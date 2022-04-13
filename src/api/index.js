const HOST = "http://localhost:8000";
const BLOGS_ROOT = "blogs";

const getBlogs = `${HOST}/${BLOGS_ROOT}`;

const blogById = (id, absoloute) => !absoloute ? `${BLOGS_ROOT}/${id}` : `${getBlogs}/${id}`;

export { getBlogs, blogById };
