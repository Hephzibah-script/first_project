import { Link } from "react-router-dom";
// import { useState } from "react";

function Header() {
  const logo = "Trip Trip!";
  // const [name, setName] = useState("");

  // const newName = () => {
  //   setName("Travels");
  // };

  return (
    <header>
      <nav>
        <Link to="/" className="text-white">
          <span className="logo">{logo}</span>
        </Link>
        <div className="Link">
          <Link to="/">Home</Link>
          <Link to="/hostel">Hostel</Link>
          <Link to="/lodge">Lodge</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
