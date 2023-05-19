import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Can't reach this page</h2>
      <ul>
        <li>Make sure the web address is correct</li>
        <li>Refresh the page</li>
      </ul>
      <Link className="link" to="/">
        Return to home page...
      </Link>
    </div>
  );
}

export default NotFound;
