import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>We lost you there :-(</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFound;
