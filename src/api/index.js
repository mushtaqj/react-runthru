const HOST = "http://localhost:8000";
const BLOGS_ROOT = "blogs";

const getBlogs = `${HOST}/${BLOGS_ROOT}`;

const blogById = (id, relative) => `${BLOGS_ROOT}/${id}`;

export { getBlogs, blogById };
