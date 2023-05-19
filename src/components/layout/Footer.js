import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" container-fluid bg-black">
      <span class="copyright">Copyright &copy;</span> 2023
      <Link to="/" className="text-dark ">
        <i className="bi bi-globe2 px-2" />
        <span className="globe">My Travel Jornal</span>
        <span className="px-4">designed by OneMedia</span>
      </Link>
    </footer>
  );
}

export default Footer;
